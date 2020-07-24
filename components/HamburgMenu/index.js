import { classNames } from "@/lib";

const HamburgMenu = ({ className, wrapperStyle, barColor = "var(--color-success-500)", width = "44px", height = "30px", ...props }) => {
  return (
    <button className={classNames("hamburg-menu", className)} aria-label="hamburgMenu" {...props}>
      <span />
      <span />
      <span />
      <style jsx>{`
        .hamburg-menu {
          width: ${width};
          height: ${height};
        }
        .hamburg-menu span {
          background-color: ${barColor};
        }
      `}</style>
    </button>
  );
};

export default HamburgMenu;
