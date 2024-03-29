import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { RouterTransition } from '@/components';
import '@/assets/css/style.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{ type: 'website', locale: 'en_IE', url: 'https://www.url.ie/', site_name: 'SiteName' }}
        twitter={{ handle: '@handle', site: '@site', cardType: 'summary_large_image' }}
      />
      <RouterTransition />
      <Component {...pageProps} />
    </>
  );
}
