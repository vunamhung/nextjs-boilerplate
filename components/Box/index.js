import Container from "@/components/Container";
import { classNames } from "@/lib";

export default function Box({ children, title, subTitle, className, ...props }) {
  return (
    <div className={classNames("box py-20", className)} {...props}>
      <Container>
        {subTitle && <h5 className="uppercase text-xs font-medium text-success-500">{subTitle}</h5>}
        {title && <h2 className="font-light mb-8">{title}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">{children}</div>
      </Container>
    </div>
  );
}
