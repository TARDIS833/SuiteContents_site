import { EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import { theme } from 'src/theme/theme'

import createEmotionCache from 'src/utils/create-emotion-cache'
import GlobalStyles from 'styles/globalStyle'

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
    <>
      <CssBaseline />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}

export default MyApp
