
"use client"

import { useActionState } from "react";
import { remove } from "../action";

const ButtonDelete = ({ id } : { id : string}) => {
  const deleteWithId = remove.bind(null,null,id);
  const[ , deleteAction, isPending] = useActionState(deleteWithId,null,)
  return (
   <form action={deleteAction}>
     <button disabled={  isPending } type="submit">
        Delete
    </button>
   </form>
  )
}

export default ButtonDelete;
