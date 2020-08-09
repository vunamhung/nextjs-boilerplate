import Head from "next/head";
import HeaderSection from "@/modules/Header";
import FooterSection from "@/modules/Footer";

export default function Wrapper({ title, hideHeader, hideFooter, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content="The Perfect Platform of Your Dream!" />
      </Head>
      {!hideHeader && <HeaderSection sticky />}
      {children}
      {!hideFooter && <FooterSection />}
    </>
  );
}
