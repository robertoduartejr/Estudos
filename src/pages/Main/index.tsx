import React from 'react';
import './styles.css';

function Main() {
    return (
        <div className="container">
            <h1 className='title'>Todo App</h1>
            <div className='form-group'>
            <input className="todo-input" placeholder='Adicionar Tarefa'></input>
            <button className='btn-add'>+</button>
            </div>
        </div>
    )
}

export default Main;