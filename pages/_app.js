import { useEffect } from "react";
import Router from "next/router";
import * as gtag from "@/lib/gtag";

import "@/styles/index.css";
import "rc-drawer/assets/index.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
