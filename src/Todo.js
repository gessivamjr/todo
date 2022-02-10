import React, { useState } from 'react';
import List from './components/List';
import TodoForm from './components/TodoForm';
import Modal from './components/Modal';
import './Todo.css';
import listReducer from './reducers/listReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {persistState, loadState} from "./components/Storage"

const store = createStore(listReducer, loadState());
store.subscribe(() => {
    persistState(store.getState())
})

export default function Todo() {
    const [showModal, setShowModal] = useState(false)

    function onHideModal() {
        setShowModal(false)
    }

    return (
        <>
            <Provider store={store}>
                <div className='container'>
                    <header className='header'>
                        <h1>To-do List</h1>
                        <button onClick={() => setShowModal(true)}>+</button>
                    </header>
                    <List></List>
                </div>
                <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
            </Provider>
        </>
    )
}