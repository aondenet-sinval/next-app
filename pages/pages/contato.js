import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>
      <h1>Contato</h1>
      <h2>
        <Link href="/">
          <a>Voltar para home</a>
        </Link>
      </h2>
    </>
  )
}