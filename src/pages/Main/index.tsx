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
    const handleDeleteItem = (index) => {
        const newTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(newTodoList)
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
                <ul className='testeul'>
                {
               todoList.map((todo,index) => <li className='list-item'>{todo}<button onClick={() => handleDeleteItem(index)} className='btn-del'>✔</button> </li>)
               }
                </ul>
            </div>
            <span className='todoFooter'>
                Você possui {todoList.length} tarefas pendentes
                <Button onClick={handleClear}>Limpar Todas</Button>
            </span>
        </div>
    )
}

export default Main;