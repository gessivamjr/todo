import React from 'react'
import ListItem from './ListItem'

export default function List(props) {
    return (
        <ul>
            {props.todoList.map(todoItem =>
                <ListItem 
                    key={todoItem.id}
                    todoItem={todoItem}
                    onDone={props.onDone}
                    onDeletedItems={props.onDeletedItems}>
                </ListItem>)}
        </ul>
    )
}