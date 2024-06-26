import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <div id="globalLoader">
        <div className="loader"></div>
        <div>Please wait while the site is charging</div>
      </div>
    </Html>
  );
}
