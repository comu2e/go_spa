import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props) => {
  return (

    <div>
      {props.bpi.time.updated}
      <br />
      {props.users[0].name}
      <br />
      {process.env.NEXT_PUBLIC_ENDPOINT_URL}

      <ul>

      </ul>
    </div>

  )
}

Home.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  const res2 = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URL + '/users')
  const data2 = await res2.json();
  return {
    bpi: data,
    users: data2
  }

}

export default Home;