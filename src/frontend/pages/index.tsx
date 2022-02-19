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
    </div>
  )
}

Home.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  const res2 = await fetch('http://swagger-api:4010/users')
  const data2 = await res2.json();
  console.log(data2);
  return {
    bpi: data,
    users: data2
  }

}

export default Home;