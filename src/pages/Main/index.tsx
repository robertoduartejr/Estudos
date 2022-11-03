import React, { useState } from 'react';
import Button from '../../components/Button/index.tsx';
import './styles.css';

const Main = () => {
    const [inputValue,setInputValue] = useState("");
    const [todoList, setTodoList] = useState<string[]>([]);
    const handleAddClick = () => {
        setTodoList([
            ...todoList,inputValue
        ])
        setInputValue("")
    }
    const handleClear = () => {
        setTodoList([])
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
               todoList.map((todo) => <li className='list-item'>{todo}</li>)
               }
                </ul>
            </div>
            <div className='todoFooter'>
                você tem {todoList.length} tarefas pendentes
                <Button onClick={handleClear}>Limpar Tudo</Button>
            </div>
        </div>
    )
}

export default Main;