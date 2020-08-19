export default function Sep({ className = 'h-4', ...props }) {
  return <div className={`${className} bg-transparent border-none`} {...props} />;
}
