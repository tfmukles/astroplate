import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-white">
      <Head />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Khmer:wght@800&family=Signika:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
