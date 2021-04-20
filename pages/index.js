import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Pizza Kuistot</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className={styles.container}>
      <h1>Welcome to pizza Kuistot</h1>
      <Link href='/base'><button>Create your recipe</button></Link>
    </div>
  </>
  )
}
