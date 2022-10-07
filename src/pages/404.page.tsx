import type { NextPage } from 'next'
import Head from 'next/head'

const NotFound: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>404 Not Found</h1>
      </main>
    </div>
  )
}

export default NotFound
