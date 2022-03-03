import Link from "next/link";

export default function Todos({ todo }) {
  return (
    <div>
      <ul>
        {todo.title}
      </ul>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {

  const res = await fetch(`http://swagger-api:4010/todos/"{ $parmas.id }`)
  const todo = await res.json()

  return {
    props: {
      todo
    }
  }
}