export default function BoxIcon({ title, icon, className, ...props }) {
  return (
    <div className='box-icon' {...props}>
      {icon}
    </div>
  );
}
