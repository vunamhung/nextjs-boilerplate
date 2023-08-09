import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { http, http2, isDev } from '@/utilities';
import { setCookie } from 'cookies-next';
import { FiLock, FiUser } from 'react-icons/fi';
import { object, string } from 'yup';

export default function Login() {
  const { push } = useRouter();
  const { getInputProps: register, onSubmit } = useForm({
    initialValues: { username: '', password: '' },
    validate: yupResolver(
      object({
        username: string().required('Required'),
        password: string().required('Required'),
      }),
    ),
  });

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <div className="container flex min-h-screen items-center justify-center">
        <form
          className="w-72 space-y-4 rounded bg-white p-8 shadow lg:w-96"
          onSubmit={onSubmit((values) => {
            http2.post('/auth/login', values).then(({ data }) => {
              console.log(data);
              if (data?.accessToken) {
                setCookie('token', data.accessToken, { secure: !isDev });
                http.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
                push('/');
              }
            });
          })}
        >
          <div className="text-center">
            <h3>Welcome Back!</h3>
          </div>
          <TextInput withAsterisk label="Username" icon={<FiUser size={16} />} {...register('username')} />
          <PasswordInput withAsterisk label="Password" icon={<FiLock size={16} />} {...register('password')} />
          <div className="w-full text-right text-sm text-gray-500">
            <Link className="hover:underline" href="/forgot-password">
              Forgot Password
            </Link>
          </div>
          <Group position="center">
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </Group>
        </form>
      </div>
    </div>
  );
}
