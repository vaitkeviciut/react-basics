import React, { useState, useEffect } from 'react'
import './ApiActivitiesPage.css';

const ApiActivitiesPage = () => {
    const [activity, setActivity] = useState('Loading...');
    const [categories, setCategories] = useState([]);
    const [participants, setParticipants] = useState('')
    const [activityPrice, setActivityPrice] = useState('')
    const [accessibility, setAccessibility] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const typesArr = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
    const participantsArr = [1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
        fetch('http://www.boredapi.com/api/activity/')
          .then(res => res.json())
          .then(data => {
            setActivity(data.activity);
          })
    }, []);


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const categories = event.target.categories.value
        const minPrice =  event.target.minPrice.value / 10
        const maxPrice = event.target.maxPrice.value / 10
        const participants = event.target.participants.value
        const minAccessibility =  event.target.minAccessibility.value / 10
        const maxAccessibility = event.target.maxAccessibility.value / 10
        
        setErrorMsg('')

        fetch(`https://www.boredapi.com/api/activity?type=${categories}&minprice=${minPrice}&maxprice=${maxPrice}&participants=${participants}&minaccessibility=${minAccessibility}&maxaccessibility=${maxAccessibility}`)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
                setErrorMsg(data.error)
            } else{
                setActivity(data.activity)
                setCategories(data.type)
                setParticipants(data.participants)
                setActivityPrice(data.price)
                setAccessibility(data.accessibility)
            }
        })
    }

    const randomActivityHandler = (event) => {
        event.preventDefault()
        setErrorMsg('')
        fetch('http://www.boredapi.com/api/activity?')
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    setErrorMsg(data.error)
                    return
                } else {
                    setActivity(data.activity)
                    setCategories(data.type)
                    setParticipants(data.participants)
                    setActivityPrice(data.price)
                    setAccessibility(data.accessibility)
                }
            })
        }

    const firstLetterUpperCase = word => word[0].toUpperCase() + word.slice(1);

  return (
    <>
    <div className="activities-container">
        <div className="activities-all-wrapper">
            <div className="content-wrapper">
                <form className="activity-form" onSubmit={formSubmitHandler}>
                    <h1 className="activity-form-title">Bored?</h1>
                    <h2 className="activity-form-description">Let us help you!</h2>
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="activity-type">Activity type:</label>
                        <select className="activity-input" name="categories">
                        {typesArr.map((category, index) => <option key={index} value={category}>{firstLetterUpperCase(category)}</option>)}
                        </select>
                    </div>
                    
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="price-range">Price range (min, max):</label>
                        <input className='activity-input' name='minPrice' type='number' min='1' max='8' defaultValue='1'></input>
                        <input className="activity-input" name='maxPrice' type='number' min='1' max='10' defaultValue='10'></input>
                    </div>
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="participants">Number of Participants:</label>
                        <select className="activity-input" name="participants" id="participants">
                        {participantsArr.map((participant, index) => <option key={index} value={participant}>{participant}</option>)}
                        </select>
                    </div>
                    <div className="type-wrapper">
                        <label className="activity-title" htmlFor="accessibility">Accessibility range (min, max):</label>
                        <input className="activity-input" type="number" name="minAccessibility" id="accessibility-range-left" min="0" max="10" defaultValue="1"/>
                        <input className="activity-input" type="number" name="maxAccessibility" id="accessibility-range-right" min="0" max="10" defaultValue="10"/>
                    </div>
                    <div className="button-wrapper">
                        <button type='submit' className="activity-button random">Customized activity</button>
                    </div>
                </form>
                <button onClick={randomActivityHandler} className="activity-button customized" type="submit" value="Customized activity" id="selected-input">Random activity</button>
            
            </div>

            {errorMsg && errorMsg.length > 0 ? (
                <div>{errorMsg}</div>
            ) : (
            <div className='output-wrapper new'>
                <div className='activity-output-wrapper'>
                    <div className='activity-wrapper'>
                        <h3 className='activity-output-title'>Activity to do:</h3>
                        <span className='activity-type-name'>{activity}</span>
                    </div>
                    {categories && categories.length > 0 && (
                    <div className='activity-wrapper'>
                        <h3 className='activity-output-title'>Activity type:</h3>
                        <span className='activity-type-name'>{firstLetterUpperCase(categories)}</span>
                    </div>
                    )}
                    <div className='activity-wrapper'>
                        <h3 className='activity-output-title'>Participants required:</h3>
                        <span className='activity-type-name'>{participants}</span>
                    </div>
                    <div className='activity-wrapper'>
                        <h3 className='activity-output-title'>Expenses:</h3>
                        <span className='activity-type-name'>{activityPrice * 10}/10</span>
                    </div>
                    
                    <div className='activity-wrapper'>
                        <h3 className='activity-output-title'>Accessibility rating:</h3>
                        <span className='activity-type-name'>{accessibility * 10}/10</span>
                    </div>
                </div>
            </div>
            )}
            

        </div>
    </div>
    </>
    
  )
}

export default ApiActivitiesPage