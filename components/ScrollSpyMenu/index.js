import React, { useContext } from "react";
import PropTypes from "prop-types";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import { classNames } from "@/lib";
import { DrawerContext } from "@/contexts/DrawerContext";

const ScrollSpyMenu = ({ className, menuItems, drawerClose, ...props }) => {
  const { dispatch } = useContext(DrawerContext);
  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  // Close drawer when click on menu item
  const toggleDrawer = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <Scrollspy items={scrollItems} className={classNames("scrollspy-menu", className)} {...props}>
      {menuItems.map((menu, index) => (
        <li key={`menu-item-${index}`}>
          {menu.staticLink ? (
            <Link href={menu.path}>
              <a>{menu.label}</a>
            </Link>
          ) : (
            <>
              {drawerClose ? (
                <AnchorLink href={menu.path} offset={menu.offset} onClick={toggleDrawer}>
                  {menu.label}
                </AnchorLink>
              ) : (
                <AnchorLink href={menu.path} offset={menu.offset}>
                  {menu.label}
                </AnchorLink>
              )}
            </>
          )}
        </li>
      ))}
    </Scrollspy>
  );
};

ScrollSpyMenu.propTypes = {
  className: PropTypes.string,
  menuItems: PropTypes.array.isRequired,
  currentClassName: PropTypes.string,
  scrolledPastClassName: PropTypes.string,
  componentTag: PropTypes.string,
  style: PropTypes.object,
  offset: PropTypes.number,
  rootEl: PropTypes.string,
  onUpdate: PropTypes.func,
};

ScrollSpyMenu.defaultProps = {
  componentTag: "ul",
  currentClassName: "is-current",
};

export default ScrollSpyMenu;
