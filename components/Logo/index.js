import { classNames } from "@/lib";

export default function Logo({ url, src, name, className, imgClass }) {
  if (url) {
    if (src) {
      return (
        <div className={classNames("logo", className)}>
          <a href={url}>
            <img className={imgClass} src={src} alt={name} />
          </a>
        </div>
      );
    }
    return (
      <div className={classNames("logo", className)}>
        <a href={url}>{name}</a>
      </div>
    );
  } else {
    if (src) {
      return (
        <div className={classNames("logo", className)}>
          <img className={imgClass} src={src} alt={name} />
        </div>
      );
    }
    return <div className={classNames("logo", className)}>{name}</div>;
  }
}
