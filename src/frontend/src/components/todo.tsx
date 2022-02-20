import React from "react"
import { createContext } from "vm";
import { NextPage } from 'next';

type Todo = {
  id?: number;
  title?: string[];
}[]


export const Todo = (todos:
  { id: number | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  return (
    <div>Todo value is:{todos.id}</div>
  )
}

Todo.getInitialProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URL + "/todos")
  const json = await res.json()
  console.log(json.stargazers_count)

  return { todos: json.stargazers_count };
}

export default Todo;