import Link from 'next/link';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({ children, className, url, tone = 'primary', priority = 'high', block, outline, size, onClick, ...props }) {
  const classes = classNames('button', className, {
    'block w-full': block,
    'inline-flex w-auto': !block,
    field: outline,
    [`~${tone}`]: tone,
    [`!${priority}`]: priority && !outline,
    [`!${size}`]: size,
  });

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
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  tone: PropTypes.oneOf(['gray', 'primary', 'success', 'warning', 'danger', 'info', 'urge']),
  priority: PropTypes.oneOf(['high', 'low']),
  size: PropTypes.oneOf(['small', 'large']),
};
