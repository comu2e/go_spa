import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { ReactNode } from 'react';

const Home: NextPage = (props) => {
  const todos = props.todos;


  todos.map(todo => {
    return (
      <div>
        {{ todo }}
      </div>
    )
  })

}

Home.getInitialProps = async function () {
  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URL + '/todos')
  const data = await res.json();
  return {
    todos: data
  }

}

export default Home;