import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Card({ children, className, tone = 'primary', rounded = 'rounded-lg', priority, ...props }) {
  return (
    <div
      className={classNames('card', className, {
        [`~${tone}`]: tone,
        [`%${priority}`]: priority,
        [rounded]: rounded,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  tone: PropTypes.oneOf(['gray', 'primary', 'success', 'warning', 'danger', 'info', 'urge']),
  priority: PropTypes.oneOf(['high', 'low']),
  rounded: PropTypes.oneOf(['rounded', 'rounded-xl', 'rounded-xs']),
};
