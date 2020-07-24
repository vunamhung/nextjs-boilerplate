import Container from "@/components/Container";
import Sticky from "react-stickynode";

const Header = ({ fluid }) => {
  return (
    <header className="header py-6">
      <Container fluid={fluid}>
        <a href="/">
          <img className="h-8" src="/logo.svg" alt="logo" />
        </a>
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
