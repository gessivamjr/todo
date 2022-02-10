import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/listActions";

export default function TodoForm(props) {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    return (
        <form>
            <input onChange={(event) => {
                const inputValue = event.target.value;
                setTodo(inputValue);
            }} type="text" value={todo} placeholder="Insira aqui..."></input>

            <button onClick={(event) => {
                event.preventDefault();
                if (todo) {
                    dispatch(addItem(todo))
                    setTodo("");
                    props.onHideModal();
                }
            }}>Adicionar</button>
        </form>
    )
}