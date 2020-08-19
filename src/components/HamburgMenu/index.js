import classNames from 'classnames';

export default function HamburgMenu({ className, wrapperStyle, barColor, width, height, ...props }) {
  return (
    <button className={classNames('hamburg-menu', className)} aria-label='hamburgMenu' {...props}>
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
}

HamburgMenu.defaultProps = {
  barColor: 'var(--color-primary-500)',
  width: '44px',
  height: '30px',
};
