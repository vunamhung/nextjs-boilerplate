export default function Box({ className, fluid, children, ...props }) {
  return (
    <section className={className} {...props}>
      {!fluid ? <div className="container mx-auto">{children}</div> : children}
    </section>
  );
}
