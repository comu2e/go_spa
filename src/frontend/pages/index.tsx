import Head from 'next/head'
import Layout from "../src/components/_layouts/Layout"
import Todos from "../src/components/todo"
import { ReactChild, ReactFragment, ReactPortal } from 'react'

export default function Home() {

  return (
    <>
      <Layout title="Layout Test"> </Layout>
      <Todos> </Todos>
    </>
  )
}
