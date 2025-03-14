"use client"
import Link from "next/link"
import ButtonDelete from "./button-delete"
import { useRouter } from "next/navigation"

type Item = {
    id: string,
    title: string,
    completed: boolean
}



export const TodoItem = ({ data }: { data: Item }) => {
    const router = useRouter()
   async function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    await fetch(`${process.env.NEXT_PUBLIC_API}/${data.id}` ,{
        method : 'PATCH',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            completed : e.target.checked
        })
    })
    router.refresh();
   }
    return (
        <>
            <div className="todo_header">
                <Link href={`data/${data.id}`}>
                    <p>{data.title}</p>
                    </Link>
                    <input type="checkbox" checked={ data.completed } onChange={handleChange}/>
            </div>
            <ButtonDelete id={ data.id }/>
        </>
    )
}