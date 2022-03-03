import React, { useEffect, useState } from 'react';
import { createContext } from "vm";
import { NextPage } from 'next';
import axios from 'axios';
import layout from '../../styles/layout.module.scss';
import Link from 'next/link'

type Todo = {
  id?: number;
  title: string;
  is_done: boolean;
}

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  // const urlAPI = process.env.NEXT_PUBLIC_ENDPOINT_URL + "/todos";
  const urlAPI = "http://localhost:8003/todos";
  useEffect(() => {
    axios.get(urlAPI).then((res) => {
      setTodos(res.data);
    })
  }, [])
  return (
    <div className={layout.contents}>
      <h1>Todos</h1>
      <div className={layout.todo_input}>
        <input type="text" name="todo" />
      </div>

      <div>

        {todos.map((todo: Todo, index: number) => (
          <div className={layout.todo} key={index}>

            <Link href={{ pathname: "/todos/[id]", query: { id: todo.id } }}>
              <a>{todo.title}</a>
            </Link>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Todo;