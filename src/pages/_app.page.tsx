import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import { theme } from 'src/theme/theme'

import GlobalStyles from 'styles/globalStyle'
import createEmotionCache from 'src/utils/create-emotion-cache'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  Component: AppProps['Component'] & {
    getLayout?: any
  }
}

const clientSideEmotionCache = createEmotionCache()

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
