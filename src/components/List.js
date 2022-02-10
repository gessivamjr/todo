import React from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

export default function List() {
    const listItems = useSelector(state => state);

    return (
        <ul>
            {listItems.map(todoItem => <ListItem key={todoItem.id} todoItem={todoItem}></ListItem>)}
        </ul>
    )
}