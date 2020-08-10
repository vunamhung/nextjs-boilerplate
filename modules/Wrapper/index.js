import HeaderSection from "@/modules/Header";
import FooterSection from "@/modules/Footer";

export default function Wrapper({ hideHeader, hideFooter, children }) {
  return (
    <>
      {!hideHeader && <HeaderSection sticky />}
      {children}
      {!hideFooter && <FooterSection />}
    </>
  );
}
