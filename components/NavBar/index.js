import React, { useContext } from "react";
import { DrawerContext } from "@/contexts/DrawerContext";
import Drawer from "@/components/Drawer";
import HamburgMenu from "@/components/HamburgMenu";

function NavBar() {
  const { state, dispatch } = useContext(DrawerContext);

  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <nav>
      <Drawer width="420px" placement="right" open={state.isOpen} drawerHandler={<HamburgMenu />} toggleHandler={toggleHandler} />
    </nav>
  );
}

export default NavBar;
