import Document, { Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/gtag';
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants';

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content={APP_NAME} />
          <meta name='description' content={APP_DESCRIPTION} />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#FFFFFF' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/icon-512.png' />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='preload'
            href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i'
            as='style'
          />
          <link rel='preload' href='/tailwind.output.css' as='style' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' />
          <link rel='stylesheet' href='/tailwind.output.css' />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
