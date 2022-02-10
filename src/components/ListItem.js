import React from 'react'
import Card from './Card'

export default function ListItem(props) {
    return (
        <li>
            <Card className={props.todoItem.done ? "done item" : "item"}>
                {props.todoItem.text}

                <div className='features'>
                    <button onClick={() => props.onDone(props.todoItem)}><span>&#x2713;</span></button>
                    <button onClick={() => props.onDeletedItems(props.todoItem)}>x</button>
                </div>
            </Card>
        </li>)
}