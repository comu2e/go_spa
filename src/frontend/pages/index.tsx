import Head from 'next/head'
import Layout from "../src/components/_layouts/Layout"
import Todos from "../src/components/todo"
import { ReactChild, ReactFragment, ReactPortal } from 'react'
import styles from '../styles/about.module.scss'  // scssをインポートする
import layout from '../styles/layout.module.scss'
export default function Home() {

  return (
    <div className={layout.main} >
      <Layout title="Layout Test"> </Layout>
      <Todos />
    </div>
  )
}
