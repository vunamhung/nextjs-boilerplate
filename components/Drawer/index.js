import PropTypes from "prop-types";
import RcDrawer from "rc-drawer";

const Drawer = ({ className, children, closeButton, closeButtonStyle, drawerHandler, toggleHandler, open, ...props }) => {
  return (
    <>
      <RcDrawer open={open} onClose={toggleHandler} className={className} {...props}>
        {children}
      </RcDrawer>
      <div className="drawer-handler inline-block" onClick={toggleHandler}>
        {drawerHandler}
      </div>
    </>
  );
};

Drawer.propTypes = {
  className: PropTypes.string,
  closeButton: PropTypes.element,
  width: PropTypes.string,
  placement: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  drawerHandler: PropTypes.element.isRequired,
};

Drawer.defaultProps = {
  width: "300px",
  handler: false,
  level: null,
};

export default Drawer;
