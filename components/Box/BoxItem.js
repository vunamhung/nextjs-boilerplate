import BoxIcon from "@/components/Box/BoxIcon";

export default function BoxItem({ children, title, icon, className, ...props }) {
  return (
    <div className="box-item" {...props}>
      {icon && <BoxIcon icon={icon} />}
      <h4 className="my-3">{title}</h4>
      <p className="text-neutral-600">{children}</p>
    </div>
  );
}
