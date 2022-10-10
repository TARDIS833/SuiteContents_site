// pages/_document.tsx
import createEmotionServer from '@emotion/server/create-instance'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionCache from 'src/utils/create-emotion-cache'
export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="kr">
        <Head>
          {/* Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage
  const cache = createEmotionCache()
  // const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // const emotionStyles = extractCriticalToChunks(initialProps.html)
  // const emotionStyleTags = emotionStyles.styles.map((style) => (
  //   <style
  //     data-emotion={`${style.key} ${style.ids.join(' ')}`}
  //     key={style.key}
  //     // eslint-disable-next-line react/no-danger
  //     dangerouslySetInnerHTML={{ __html: style.css }}
  //   />
  // ))

  return {
    ...initialProps,
    // emotionStyleTags,
  }
}
