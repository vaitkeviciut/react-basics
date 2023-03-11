import React, { useState, useEffect } from 'react'
import './ApiChuckPage.css';

const ApiChuckPage = () => {
    const [joke, setJoke] = useState('Loading...');
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(res => res.json())
        .then(categoriesData => {
            setCategories(categoriesData);
            setSelectedCategory(categoriesData[0])
        })
    }, []);

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random')
          .then(res => res.json())
          .then(jokeData => {
            setJoke(jokeData.value);
          })
      }, []);

    const firstLetterUpperCase = word => word[0].toUpperCase() + word.slice(1);

    const categoryJokeHandler = (event) => {
    event.preventDefault();

    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
        .then(res => res.json())
        .then(jokeData => {
            setJoke(jokeData.value);
        })
    }

  const selectCategoryHandler = event => setSelectedCategory(event.target.value);


    return (
        <>
        <div className="chuck-content-wrapper">
            {categories && categories.length > 0 && (
            <form className='chuck-form' onSubmit={categoryJokeHandler}>
                <select className='chuck-select-input' name='category' onChange={selectCategoryHandler}>
                    {categories.map((category, index) => <option className='chuck-option-item' key={index} value={category}>{firstLetterUpperCase(category)}</option>)}
                </select>
                <button className='chuck-button'>Get a Joke</button>
            </form>
            )}

            <p className='chuck-joke'>{joke}</p>
        </div>
        </>
        
    )
}

export default ApiChuckPage