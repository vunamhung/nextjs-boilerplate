import Headroom from "react-headroom";
import Container from "@/components/Container";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";

const Header = ({ fluid }) => {
  return (
    <header className="header py-6">
      <Container fluid={fluid} className="flex justify-between items-center">
        <Logo src="/vercel.svg" name="Next" url="/" imgClass="h-8" />
        <NavBar />
      </Container>
    </header>
  );
};

export default function HeaderSection({ sticky, fluid }) {
  if (sticky) {
    return (
      <Headroom>
        <Header fluid={fluid} />
      </Headroom>
    );
  }

  return <Header fluid={fluid} />;
}
