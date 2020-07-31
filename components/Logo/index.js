import classNames from "classnames";
import Link from "next/link";

export default function Logo({ url, src, name, className, imgClass }) {
  if (url) {
    if (src) {
      return (
        <Link href={url}>
          <div className={classNames("logo inline-flex items-center cursor-pointer", className)}>
            <img className={imgClass} src={src} alt={name} />
            <span className="ml-2 text-xl font-medium">{name}</span>
          </div>
        </Link>
      );
    }
    return (
      <div className={classNames("logo cursor-pointer", className)}>
        <Link href={url}>{name}</Link>
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
