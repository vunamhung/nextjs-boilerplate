import React, { useContext } from "react";
import { DrawerContext } from "@/contexts/DrawerContext";
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
  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <nav>
      <Drawer width="420px" placement="right" open={state.isOpen} drawerHandler={<HamburgMenu />} toggleHandler={toggleHandler}>
        <ScrollSpyMenu menuItems={menuItems} drawerClose={true} offset={-100} />
      </Drawer>
    </nav>
  );
}

export default NavBar;
