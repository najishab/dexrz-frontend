/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { nodes } from 'utils/getRpcUrl'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      // eslint-disable-next-line no-param-reassign
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html translate="no">
        <Head>
          {nodes.map((node) => (
            <link key={node} rel="preconnect" href={node} />
          ))}
          {process.env.NEXT_PUBLIC_NODE_PRODUCTION && (
            <link rel="preconnect" href={process.env.NEXT_PUBLIC_NODE_PRODUCTION} />
          )}
          <link rel="preconnect" href="https://fonts.gstatic.com" /><link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&amp;display=swap" rel="stylesheet" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="mobile-web-app-capable" content="yes" /><meta name="application-name" content="DexRZ" /><link rel="icon" type="image/png" sizes="16x16" href="https://dex.rz.game/favicon-16x16.png" /><link rel="icon" type="image/png" sizes="32x32" href="https://dex.rz.game/favicon-32x32.png" /><link rel="icon" type="image/png" sizes="96x96" href="https://dex.rz.game/favicon-96x96.png" /><link rel="manifest" href="/manifest.json" /><link rel="canonical" href="https://rz.game" /><meta name="apple-mobile-web-app-title" content="DexRZ" /><link rel="apple-touch-icon" type="image/png" href="https://dex.rz.game/apple-icon.png" /><link rel="apple-touch-icon" type="image/png" sizes="57x57" href="https://dex.rz.game/apple-icon-57x57.png" /><link rel="apple-touch-icon" type="image/png" sizes="60x60" href="https://dex.rz.game/apple-icon-60x60.png" /><link rel="apple-touch-icon" type="image/png" sizes="72x72" href="https://dex.rz.game/apple-icon-72x72.png" /><link rel="apple-touch-icon" type="image/png" sizes="76x76" href="https://dex.rz.game/apple-icon-76x76.png" /><link rel="apple-touch-icon" type="image/png" sizes="114x114" href="https://dex.rz.game/apple-icon-114x114.png" /><link rel="apple-touch-icon" type="image/png" sizes="120x120" href="https://dex.rz.game/apple-icon-120x120.png" /><link rel="apple-touch-icon" type="image/png" sizes="144x144" href="https://dex.rz.game/apple-icon-144x144.png" /><link rel="apple-touch-icon" type="image/png" sizes="152x152" href="https://dex.rz.game/apple-icon-152x152.png" /><link rel="apple-touch-icon" type="image/png" sizes="180x180" href="https://dex.rz.game/apple-icon-180x180.png" />
    </Head>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTAG}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
          <div id="portal-root" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
