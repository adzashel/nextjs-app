"use client"

import { useActionState } from "react";
import { create } from "@/app/action";

const Form = () => {
    const [actionState, actionForm , isPending] = useActionState(create, null);
    return (
        <div className="form_container">
            <div className="wrapper">
                <h1 className="title">Form Todo</h1>
                <p>{ actionState?.message }</p>
                <form action={ actionForm } className="form">
                    <input type="text" name="title" />
                    <button type="submit" disabled={ isPending}>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form;