import { classNames } from "@/lib";

export default function Container({ children, fluid, noGutter, className, ...props }) {
  return (
    <div
      className={classNames(
        className,
        { "px-4 ": fluid && !noGutter },
        { "w-full max-w-none": fluid },
        { "px-0": noGutter && !fluid },
        { container: !fluid },
      )}
      {...props}
    >
      {children}
    </div>
  );
}
