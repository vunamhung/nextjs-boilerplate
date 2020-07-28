import useDrawer from "@/stores/drawer";
import Drawer from "@/components/Drawer";
import HamburgMenu from "@/components/HamburgMenu";
import ScrollSpyMenu from "@/components/ScrollSpyMenu";

const menuItems = [
  {
    label: "Banner",
    path: "#banner",
    offset: "80",
  },
  {
    label: "Work History",
    path: "#workHistorySection",
    offset: "100",
  },
  {
    label: "Portfolio",
    path: "#blogSection",
    offset: "100",
  },
];

function NavBar() {
  const [{ isOpen }, { toggle }] = useDrawer();

  return (
    <nav>
      <Drawer width="420px" placement="right" open={isOpen} drawerHandler={<HamburgMenu />} toggleHandler={toggle}>
        <ScrollSpyMenu menuItems={menuItems} drawerClose={true} offset={-100} />
      </Drawer>
    </nav>
  );
}

export default NavBar;
