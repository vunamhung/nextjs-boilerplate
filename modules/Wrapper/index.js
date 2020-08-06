import Head from "next/head";
import HeaderSection from "@/modules/Header";
import FooterSection from "@/modules/Footer";

export default function Wrapper({ title, hideHeader, hideFooter, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="The Perfect Platform of Your Dream!" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
          as="style"
        />
        <link rel="preload" href="/tailwind.output.css" as="style" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" />
        <link rel="stylesheet" href="/tailwind.output.css" key="tailwind" />
      </Head>
      {!hideHeader && <HeaderSection sticky />}
      {children}
      {!hideFooter && <FooterSection />}
    </>
  );
}
