import Container from "@/components/Container";
import Sticky from "react-stickynode";
import DrawerProvider from "@/contexts/DrawerContext";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";

const Header = ({ fluid }) => {
  return (
    <header className="header py-6">
      <Container fluid={fluid} className="flex justify-between items-center">
        <Logo src="/vercel.svg" name="Next" url="/" imgClass="h-8" />
        <DrawerProvider>
          <NavBar />
        </DrawerProvider>
      </Container>
    </header>
  );
};

function HeaderSection({ sticky, fluid }) {
  if (sticky) {
    return (
      <Sticky top={0} innerZ={9999} activeClass="sticky-header-active">
        <Header fluid={fluid} />
      </Sticky>
    );
  }

  return <Header fluid={fluid} />;
}

export default HeaderSection;
