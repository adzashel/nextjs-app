'use server'

import { revalidateTag } from "next/cache";
import { z } from "zod"

  export const create = async (_state: unknown , formData : FormData) => {
    const schema = z.object({
        title : z.string().min(3)
    });

    const parsedData =  schema.safeParse({
        title : formData.get('title'),
    })

    // check if parsedData is failed
    if ( !parsedData.success) {
        return{ message : parsedData.error.errors[0].message }
    }

    const data = parsedData.data;

    const rest = await fetch(process.env.NEXT_PUBLIC_API as string , {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
            ...data,
            completed : false
        }),
    })


    if(!rest.ok) {
        return {message : "Error creating"}
    }

    revalidateTag('validate')

    return { message : "success" }
}

// delete item
export const remove = async(state : unknown , id : string) => {
    const rest = await fetch(`${ process.env.NEXT_PUBLIC_API}/${ id }` , {
        method : "DELETE"
    });

    if(!rest.ok) {
        return { message : "Failed to delete"}
    }

    revalidateTag('validate');

    return { message : "Deleted" }
}