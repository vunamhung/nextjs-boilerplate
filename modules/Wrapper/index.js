import Head from "next/head";
import Top from "@/modules/Header";
import Bottom from "@/modules/Footer";

export default function Wrapper({ title, hideHeader, hideFooter, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
      </Head>
      {!hideHeader && <Top />}
      {children}
      {!hideFooter && <Bottom />}
    </>
  );
}
