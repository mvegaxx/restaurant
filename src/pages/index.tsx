import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/restaurant">restaurant</Link>
      <Link href="/counterExample">Counter example</Link>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
       
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       
      </header>
    </div>
  )
}

export default IndexPage
