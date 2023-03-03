import { useState } from 'react';

function ShoppingListPage() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    
    const submitHandler = (event) => {
        event.preventDefault();

    const newShoppingItem = {
        id: Math.random(),
        title: input,
        done: false,
    }
      
    setList(prevState => [newShoppingItem, ...prevState]);
    setInput('');
    }
    
    const inputHandler = event => setInput(event.target.value);
    const deleteHandler = id => setList(prevState => prevState.filter(item => item.id !== id));

    const doneHandler = id => {
        setList(prevState => {
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
        <div className='shopping-content-wrapper'>
            <form className='shopping-list-form' onSubmit={submitHandler}>
                <div className='shopping-form-control-wrapper'>
                    <label className='shopping-item-label' htmlFor='shopping-item-input'>Shopping item:</label>
                    <input className='shopping-item-input'
                    type='text'
                    id='shopping-item-input'
                    value={input}
                    onChange={inputHandler}
                    />
                </div>
                <div className='submit-button-wrapper'>
                    <input className='shopping-submit-button' type="submit" />
                </div>
            </form>
            <div className='shopping-list-wrapper'>
            {list && list.length > 0 ? (
            <div>
                <h2>Shopping List:</h2>

                <ul className='shopping-list'>
                {list.map((item, index) => (
                    <li className='shopping-list-item' key={index}>
                    <input className='shopping-list-checkbox' type="checkbox" onChange={() => doneHandler(item.id)} />
                    <span className={item.done ? 'done' : ''}>{item.title}</span> 
                    <button className='button-delete' onClick={() => deleteHandler(item.id)}>X</button>
                    </li>
                ))}
                </ul>
            </div>
            ) : (
                <h2 className='no-items-text'>No shopping items...</h2>
            )}
            </div>
        </div>
    )
}
export default ShoppingListPage;