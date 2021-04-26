import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from './navbar'
import styles from '../../styles/Home.module.css'

export type PageWithLayout = {
  title: string
  children: any
};

export default function PageContainer({ title, children }:PageWithLayout) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}
