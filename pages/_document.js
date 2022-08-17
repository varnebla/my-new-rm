import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full">
      <Head>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700&family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
