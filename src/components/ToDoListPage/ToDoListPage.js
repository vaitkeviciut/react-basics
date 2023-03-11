import { useState } from 'react';
import './ToDoList.css';
import ToDoListItem from './ToDoListItem';
import ToDoListForm from './ToDoListForm';

const ToDoListPage = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [descriptionInput, setDescriptionInput] = useState('');

    const addTaskHandler = (event) => {
        event.preventDefault();

    const newTask = {
        id: Math.random(),
        title: input,
        done: false,
        description: descriptionInput,
        date: new Date().toISOString(),
    }
      
    setTasks(prevState => [newTask, ...prevState]);
    setInput('');
    setDescriptionInput('');
    }
    
    const descriptionInputHandler = event => setDescriptionInput(event.target.value);
    const inputHandler = event => setInput(event.target.value);
    const deleteHandler = id => setTasks(prevState => prevState.filter(task => task.id !== id));

    const doneHandler = id => {
        setTasks(prevState => {
        const updatedList = prevState.map((task) => {
            if (task.id === id) {
            const taskToUpdate = {...task};
            taskToUpdate.done = !task.done;

            return taskToUpdate;
        }

        return task;
    });

    return updatedList;
    })
    }

    return (
        <>
        <div className='todo-content-wrapper'>
            <h1 className="todo-form-title">To Do List</h1>
            <ToDoListForm
            title={input}
            description={descriptionInput}
            onAddTask={addTaskHandler}
            onInput={inputHandler}
            onDescriptionInput={descriptionInputHandler}
            />

            <div className='todo-list-wrapper'>
            {tasks && tasks.length > 0 ? (
            <div>
                <h2 className='todo-list-title'>To Do List:</h2>
                <ul className='todo-list'>
                    {tasks.map(task => <ToDoListItem key={task.id} data={task} onDone={doneHandler} onDelete={deleteHandler} />)}
                </ul>
            </div>

            ) : (
                <h2 className='no-items-text'>No tasks in to do list...</h2>
            )}
            </div>
        </div>
        </>
        
    )
}

export default ToDoListPage