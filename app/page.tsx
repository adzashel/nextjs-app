import React from 'react'
import { TodoItem } from './_components/todo-item'
type Item = {
  id : string,
  title: string,
  completed: boolean
}
const page = async() => {
  // Fetch data from an API
  const data = await fetch(process.env.NEXT_PUBLIC_API as string)
  const response : Item[] = await data.json();
  return (
    <main>
        <h2>Todo List</h2>
      <section className='todo_list'>
        { !!response && response.map(item => (
          <div key={item.id} className='card'>
            <TodoItem data={ item }/>
          </div>
        ))}
      </section>
    </main>
  )
}

export default page
