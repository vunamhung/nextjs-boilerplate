export default function Sep({ level = 4, ...props }) {
  return <div className={`h-${level} bg-transparent border-none`} {...props} />;
}
