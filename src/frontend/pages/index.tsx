import Head from 'next/head'
import Layout from "../src/components/_layouts/Layout"
import Todos from "../src/components/todo"
import { ReactChild, ReactFragment, ReactPortal } from 'react'
import styles from '../styles/about.module.scss'  // scssをインポートする

export default function Home() {

  return (
    <>
      <div className={styles.article__title}>Hello</div>
      <Layout title="Layout Test"> </Layout>
      <Todos> </Todos>
    </>
  )
}
