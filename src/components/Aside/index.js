import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Aside({ children, className, tone = 'primary', ...props }) {
  return (
    <span
      className={classNames('aside', className, {
        [`~${tone}`]: tone,
      })}
      {...props}
    >
      {children}
    </span>
  );
}

Aside.propTypes = {
  className: PropTypes.string,
  tone: PropTypes.oneOf(['gray', 'primary', 'success', 'warning', 'danger', 'info', 'urge']),
};
