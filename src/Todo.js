import React, { useEffect, useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import Modal from './components/Modal';
import './Todo.css';


export default function Todo() {

    const [todoList, setTodoList] = useState([]);
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem("savedItems"))
        if (savedItems) {
            setTodoList(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("savedItems", JSON.stringify(todoList))
    }, [todoList])

    function onAddItems(todoCallback) {
        const todoListItem = new Item(todoCallback)
        setTodoList([...todoList, todoListItem]);
        onHideModal()
    }

    function onDeletedItems(todoItem) {
        const filterItems = todoList.filter(item => item.id !== todoItem.id)
        setTodoList(filterItems)
    }

    function onDone(todoItem) {
        const markItems = todoList.map(item => {
            if (item.id === todoItem.id) {
                item.done = !item.done;
            }
            return item;
        })
        setTodoList(markItems)
    }

    function onHideModal() {
        setShowModal(false)
    }

    return (
        <>
            <div className='container'>
                <header className='header'>
                    <h1>To-do List</h1>
                    <button onClick={() => setShowModal(true)}>+</button>
                </header>
                <List onDone={onDone} onDeletedItems={onDeletedItems} todoList={todoList}></List>
            </div>
            <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItems={onAddItems}></TodoForm></Modal>
        </>
    )
}