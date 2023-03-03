import { useState } from 'react';

const ToDoList = () => {
    const [input, setInput] = useState('');
    const [actions, setActions] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault();

    const newActionItem = {
        id: Math.random(),
        title: input,
        done: false,
    }
      
    setActions(prevState => [newActionItem, ...prevState]);
    setInput('');
    }
    
    const inputHandler = event => setInput(event.target.value);
    const deleteHandler = id => setActions(prevState => prevState.filter(item => item.id !== id));

    const doneHandler = id => {
        setActions(prevState => {
        const updatedList = prevState.map((item) => {
            if (item.id === id) {
            const itemToUpdate = {...item};
            itemToUpdate.done = !item.done;

            return itemToUpdate;
        }

        return item;
    });

    return updatedList;
    })
    }

  return (
    <div className='todo-content-wrapper'>
            <form className='todo-list-form' onSubmit={submitHandler}>
                <div className='todo-form-control-wrapper'>
                    <label className='todo-item-label' htmlFor='todo-item-input'>Action:</label>
                    <input className='todo-item-input'
                    type='text'
                    id='todo-item-input'
                    value={input}
                    onChange={inputHandler}
                    />
                </div>
                <div className='submit-button-wrapper'>
                    <input className='todo-submit-button' type="submit" />
                </div>
            </form>

            <div className='todo-list-wrapper'>
            {actions && actions.length > 0 ? (
            <div>
                <h2 className='todo-list-title'>To Do List:</h2>

                <ul className='todo-list'>
                {actions.map((item, index) => (
                    <li className='todo-list-item' key={index}>
                    <input className='todo-list-checkbox' type="checkbox" onChange={() => doneHandler(item.id)} />
                    <span className={`todo-list-text ${item.done ? 'done' : ''}`}>{item.title}</span> 
                    <button className='button-delete' onClick={() => deleteHandler(item.id)}>X</button>
                    </li>
                ))}
                </ul>
            </div>
            ) : (
                <h2 className='no-items-text'>No actions in to do list...</h2>
            )}
            </div>
        </div>
  )
}

export default ToDoList