import React, { useEffect, useState } from 'react';
import { createContext } from "vm";
import { NextPage } from 'next';
import axios from 'axios';

type Todo = {
  id?: number;
  title: string[];
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
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((data: Todo, index: number) => (
          data.title.map((title: string, index_title: number) => (
            <div key={index_title}>{index_title + 1}:{title}</div>
          ))

        ))}
      </div>
    </div>
  );
}

export default Todo;