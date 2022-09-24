import { AppProps } from 'next/app'
import GlobalStyles from 'styles/globalStyle'

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & {
    getLayout?: any
  }
}

function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props
  const getLayout = Component.getLayout ?? ((page: any) => page)

  return (
    <>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
