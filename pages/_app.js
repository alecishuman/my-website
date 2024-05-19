import React, { useEffect } from "react";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) {
        setTimeout(() => {
          loader.remove();
        }, 3000);
      }
    }
  }, []);
  return <Component {...pageProps} />;
}
