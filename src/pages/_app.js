import { useEffect } from 'react';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import * as gtag from '@/utilities/gtag';

import '@/assets/styles/base.css';
import '@/assets/styles/index.css';
import '@/assets/styles/tailwind.css';
import 'rc-drawer/assets/index.css';
import '@glidejs/glide/dist/css/glide.core.min.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
