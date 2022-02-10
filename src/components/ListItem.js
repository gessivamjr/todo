import React from 'react'
import Card from './Card'
import {useDispatch} from 'react-redux'
import {changeDone, deleteItem} from '../actions/listActions'

export default function ListItem(props) {
    const dispatch = useDispatch();

    return (
        <li>
            <Card className={props.todoItem.done ? "done item" : "item"}>
                {props.todoItem.text}

                <div className='features'>
                    <button onClick={() => dispatch(changeDone(props.todoItem.id))}><span>&#x2713;</span></button>
                    <button onClick={() => dispatch(deleteItem(props.todoItem.id))}>x</button>
                </div>
            </Card>
        </li>)
}