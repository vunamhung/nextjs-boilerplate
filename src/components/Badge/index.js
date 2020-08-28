import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Badge({ children, className, tone = 'primary', priority, pill, fontSize = '60%', ...props }) {
  return (
    <span
      className={classNames('badge', className, {
        [`~${tone}`]: tone,
        [`!${priority}`]: priority,
        'rounded-full px-4': pill,
        'rounded px-2': !pill,
      })}
      style={{ fontSize }}
      {...props}
    >
      {children}
    </span>
  );
}

Badge.propTypes = {
  className: PropTypes.string,
  tone: PropTypes.oneOf(['gray', 'primary', 'success', 'warning', 'danger', 'info', 'urge']),
  priority: PropTypes.oneOf(['high', 'low']),
  fontSize: PropTypes.oneOf(['60%', '70%', '80%', '90%']),
};
