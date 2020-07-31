import PropTypes from "prop-types";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Link from "next/link";
import classNames from "classnames";
import useDrawer from "../../stores/drawer";

export default function ScrollSpyMenu({ className, menuItems, drawerClose, ...props }) {
  const [, { toggle }] = useDrawer();

  // empty array for scrollspy items
  const scrollItems = [];

  // convert menu path to scrollspy items
  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

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
                <AnchorLink href={menu.path} offset={menu.offset} onClick={toggle}>
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
}

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
