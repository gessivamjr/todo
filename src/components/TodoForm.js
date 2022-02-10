import React, { useState } from "react";

export default function TodoForm(props) {
    const [todo, setTodo] = useState("");

    return (
        <form>
            <input onChange={(event) => {
                const inputValue = event.target.value;
                setTodo(inputValue);
            }} type="text" value={todo} placeholder="Insira aqui..."></input>

            <button onClick={(event) => {
                event.preventDefault();
                if (todo) {
                    props.onAddItems(todo)
                    setTodo("");
                }
            }}>Adicionar</button>
        </form>
    )
}