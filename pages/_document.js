import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

import "../global-styles";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
          <title>Alic Szecsei</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Alic Szecsei" />
          <meta name="description" content="Game programming and software development
          portfolio of Alic Szecsei." />
          <meta name="twitter:title" content="Alic Szecsei's Portfolio" />

          {/* third-generation iPad with high-resolution Retina display: */}
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/img/favicon144.png" />
          {/* iPhone with high-resolution retina display: */}
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/img/favicon114.png" />
          {/* first- and second- generation iPad: */}
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/img/favicon72.png" />
          {/* non-retina iPhone, iPod Touch, and Android 2.1+ devices: */}
          <link rel="apple-touch-icon-precomposed" href="/static/img/favicon57.png" />
          {/* basic favicon */}
          <link rel="shortcut icon" href="/static/img/favicon32.png" />

          <link rel="preload" href="/static/fonts/open-sans-v15-latin-italic.woff2" as="font" type="font/woff2" />
          <link rel="preload" href="/static/fonts/open-sans-v15-latin-regular.woff2" as="font" type="font/woff2" />
          <link rel="preload" href="/static/fonts/raleway-v12-latin-800.woff2" as="font" type="font/woff2" />
          <link rel="preload" href="/static/fonts/raleway-v12-latin-regular.woff2" as="font" type="font/woff2" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
