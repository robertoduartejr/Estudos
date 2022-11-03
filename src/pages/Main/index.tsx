import React, { useState } from 'react';
import './styles.css';

const Main = () => {
    const [inputValue,setInputValue] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);
    const handleAddClick = () => {
        setTodoList([
            ...todoList,inputValue
        ])
    }
    

    return (
        <div className="container">
            <h1 className='title'>Todo App</h1>
            <div className='form-group'>
            <input
            className="todo-input"
            type="text"
            placeholder='Adicionar Tarefa'
            value={inputValue}
            onChange = {(event) =>setInputValue(event.target.value) }/>

            <button onClick={handleAddClick} className='btn-add'>+</button>
            </div>
            <div className='todo-list'>
                <ul>
                {
               todoList.map((todo) => <li>{todo}</li>)
               }
                </ul>
            </div>
        </div>
    )
}

export default Main;