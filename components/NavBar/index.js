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
  const [state, actions] = useDrawer();

  return (
    <nav>
      <Drawer width="420px" placement="right" open={state.isOpen} drawerHandler={<HamburgMenu />} toggleHandler={actions.toggle}>
        <ScrollSpyMenu menuItems={menuItems} drawerClose={true} offset={-100} />
      </Drawer>
    </nav>
  );
}

export default NavBar;
