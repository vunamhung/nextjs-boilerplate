import Link from "next/link";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Button({ children, className, url, tone = "primary", priority, size, onClick, ...props }) {
  const classes = classNames("button", className, { [`~${tone}`]: tone, [`!${priority}`]: priority, [`!${size}`]: size });

  if (url) {
    return (
      <Link href={url}>
        <button className={classes} {...props}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={classes} {...props} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  tone: PropTypes.oneOf(["neutral", "primary", "success", "warning", "danger", "info", "urge"]),
  priority: PropTypes.oneOf(["high", "low"]),
  size: PropTypes.oneOf(["small", "large"]),
};
