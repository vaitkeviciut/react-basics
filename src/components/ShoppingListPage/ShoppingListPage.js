import { useState } from 'react';
import BackButton from '../BackButton';
import ShoppingListItem from './ShoppingListItem';
import ShoppingListForm from './ShoppingListForm';
import './ShoppingListPage.css';

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
        <>
        <BackButton />
        <div className='shopping-content-wrapper'>
            <h1 className="shopping-form-title">Shopping List</h1>
            <ShoppingListForm input={input} onSubmit={submitHandler} onInput={inputHandler} />

            <div className='shopping-list-wrapper'>
            {list && list.length > 0 ? (
            <div>
                <h2 className='shopping-list-title'>Shopping List:</h2>

                <ul className='shopping-list'>
                {list.map((item) => <ShoppingListItem data={item} key={item.id} onDone={doneHandler} onDelete={deleteHandler} />)}
                </ul>
            </div>
            ) : (
                <h2 className='no-items-text'>No shopping items...</h2>
            )}
            </div>
        </div>
        </>
        
    )
}
export default ShoppingListPage;