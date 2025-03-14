
"use client"

const ButtonDelete = ({ id } : { id : string}) => {
  return (
    <button onClick={() => console.log(id)}>
        Delete
    </button>
  )
}

export default ButtonDelete;
