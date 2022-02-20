import React from "react"

export type Props = {
  todos: Todos;
  children: React.ReactNode;
}

type Todos = {
  title: string;
}

const Todo: React.VFC<Props> = ({ todos }) => {
  let rows = [];

  console.log(todos)

  for (let i in todos) {
    rows.push(
      todos.title
    )
  }
  return (
    <>

    </>
  )
}
export default Todo