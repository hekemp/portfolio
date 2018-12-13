import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import '../global-styles'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <title>Heather Kemp</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Heather Kemp" />
          <meta
            name="description"
            content="Game programming and software development
          portfolio of Heather Kemp."
          />

          {/* Facebook OpenGraph */}
          <meta property="og:image:height" content="180" />
          <meta property="og:image:width" content="344" />
          <meta property="og:title" content="Alic Szecsei" />
          <meta
            property="og:description"
            content="Game programming and software development portfolio of Heather Kemp."
          />
          <meta property="og:url" content="https://alic-szecsei.com" />
          <meta
            property="og:image"
            content="https://alic-szecsei.com/static/img/og-image.jpg"
          />
          <meta name="twitter:title" content="Alic Szecsei's Portfolio" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/img/apple-touch-icon.png?v=alQgGE7PNp"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/img/favicon-32x32.png?v=alQgGE7PNp"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/img/favicon-16x16.png?v=alQgGE7PNp"
          />
          <link rel="manifest" href="/static/site.webmanifest?v=alQgGE7PNp" />
          <link
            rel="mask-icon"
            href="/static/img/safari-pinned-tab.svg?v=alQgGE7PNp"
            color="#5bbad5"
          />
          <link
            rel="shortcut icon"
            href="/static/img/favicon.ico?v=alQgGE7PNp"
          />
          <meta name="apple-mobile-web-app-title" content="Alic Szecsei" />
          <meta name="application-name" content="Alic Szecsei" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml?v=alQgGE7PNp"
          />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="preload"
            href="/static/fonts/open-sans-v15-latin-italic.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/static/fonts/open-sans-v15-latin-regular.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/static/fonts/raleway-v12-latin-800.woff2"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="/static/fonts/raleway-v12-latin-regular.woff2"
            as="font"
            type="font/woff2"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
