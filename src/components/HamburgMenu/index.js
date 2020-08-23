export default function HamburgMenu({ className, barColor = 'var(--color-primary-500)', width = '44px', height = '30px', ...props }) {
  return (
    <button className='hamburg-menu' aria-label='hamburgMenu' {...props}>
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
