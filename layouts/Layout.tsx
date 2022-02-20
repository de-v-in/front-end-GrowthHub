import Head from 'next/head'
import Header from '../components/Header'

export default function Layout({ children}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to be software development"
        />
      </Head>
      <Header />
      <main>{children}</main>     
    </div>
  )
}
