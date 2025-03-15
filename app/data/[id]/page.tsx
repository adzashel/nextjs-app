 'use client'

import { useParams } from "next/navigation";
import { useState  , useEffect} from "react";


 const Page = () => {
    const { id } = useParams();
    const [data, setData] = useState<{title : string }>();

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API}/${id}`)
        .then(res => res.json())
        .then(setData)
    },[id]);
    return (
        <div>
            <h1>Todo Detail</h1>
            <p>{data?.title}</p>
        </div>
    )
}

export default Page