import Router from 'next/router';
import { isDev } from '@/utilities';
import axios, { AxiosError } from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

const http = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });
const http2 = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

http.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = `Bearer ${getCookie('token')}`;

    return config;
  },
  (error) => Promise.reject(error),
);

http2.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error),
);

http2.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<any>) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const token = getCookie('token');
    const refreshToken = getCookie('refreshToken');
    const originalRequest = error.config;

    if (error.response?.status !== 401) {
      toast.error(error?.response?.data?.stack || error.message);
    }

    if (token && error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await http2.post('/auth/refresh-token', {}, { params: { refresh_token: refreshToken } });

        if (data?.access_token) {
          setCookie('token', data.access_token, { secure: !isDev });
          setCookie('refreshToken', data.refresh_token, { secure: !isDev });
          http.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;

          return http(originalRequest);
        }
        Router.push('/login').catch(console.error);
      } catch (error) {
        // @ts-ignore
        if (error?.response?.status === 400) Router.push('/login').catch(console.error);
      }
    }
    return Promise.reject(error);
  },
);

export { http, http2 };
