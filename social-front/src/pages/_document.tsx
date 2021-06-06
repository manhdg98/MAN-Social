import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class extends Document {
  public render() {
    return (
      <Html>
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.GA_TRACKING_ID}');`
          }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
