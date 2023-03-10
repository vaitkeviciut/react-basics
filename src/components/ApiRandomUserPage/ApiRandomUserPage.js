import React, { useState, useEffect } from 'react'
import './ApiRandomUserPage.css';

const ApiRandomUserPage = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState([]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState('');
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const [count, setCount] = useState([]);

  const resultsArr = [1, 2, 3, 4, 5]
  const countryArr = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US']

  useEffect(() => {
    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {
      let results = data.results;
      results.map(result => {
        setFirstName(result.name.first)
        setLastName(result.name.last)
        setGender(result.gender)
        setPicture(result.picture.large)
        setPhone(result.phone)
        setEmail(result.email)
        setUsername(result.login.username)
        setPassword(result.login.password)
        setCountry(result.location.country)
        setCity(result.location.city)
      })
    })
  }, []);
  

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const results = event.target.results.value;
    const gender = event.target.gender.value;
    const nat = event.target.countries.value;


    fetch(`https://randomuser.me/api/?results=${results}&gender=${gender}&nat=${nat}`)
    .then(res => res.json())
    .then(data => {
      let results = data.results;
      results.map(result => {
        setFirstName(result.name.first)
        setLastName(result.name.last)
        setGender(result.gender)
        setPicture(result.picture.large)
        setPhone(result.phone)
        setEmail(result.email)
        setUsername(result.login.username)
        setPassword(result.login.password)
        setCountry(result.location.country)
        setCity(result.location.city)
        setCount(result)
      
    })
  })
}

  const randomActivityHandler = (event) => {
    event.preventDefault();

    fetch(`https://randomuser.me/api/`)
        .then(res => res.json())
        .then(data => {
          let results = data.results;
          results.map((result, index) => {
            setFirstName(result.name.first)
            setLastName(result.name.last)
            setGender(result.gender)
            setPicture(result.picture.large)
            setPhone(result.phone)
            setEmail(result.email)
            setUsername(result.login.username)
            setPassword(result.login.password)
            setCountry(result.location.country)
            setCity(result.location.city)
            console.log(index)
          })
        })
    }

    const personalInfoHandler = () => setShowPersonalInfo(prevState => !prevState);

  return (
    <div className='generator-wrapper'>
      <div className='generator-form-wrapper'>
        <form id='generator-form' onSubmit={formSubmitHandler}>
          <div className='generator-form-title-wrapper'>
            <h2 className='generator-form-title'>Random</h2>
            <h3 className='generator-form-decription'>people data generator</h3>
          </div>
          <fieldset className='generator-fieldset'>
            <legend className='generator-form-legend'>Select gender:
              <label className="label-radio-male" htmlFor="gender1">Male</label>
              <input className="radio" type="radio" id="gender1" name="gender" value="male"/>
              <label className="label-radio-female" htmlFor="gender1">Female</label>
              <input className="radio" type="radio" id="gender2" name="gender" value="female"/>
            </legend>
          </fieldset>
          <div className='generator-select-wrapper'>
            <label className="label" htmlFor="results">Select number of people to create:</label>
            <select className="input" name="results" id="results">
              {resultsArr.map((result, index) => <option key={index} value={result} >{result}</option>)}
            </select>
          </div>
          <div className='generator-select-wrapper'>
              <label className="label" htmlFor="countries">Select country:</label>
              <select className="input" name="countries" id="countries">
                {countryArr.map((country, index) => <option key={index} value={country} >{country}</option>)}
              </select>
          </div>
          <div className="generator-buttons-wrapper">
            <button onClick={randomActivityHandler} className="generate-button random" type="submit" id="random-submit-button" value="Generate random person">RANDOM person</button>
            <button className="generate-button selected" type="submit" id="submit-button">Selected person</button>
          </div>
        </form>
        
      </div>

      <div className="random-user-wrapper">
        {count && count.length > 0 && (
          <div className='random-user new'>
            <h2 className='generator-user-name'>{firstName} {lastName} ({gender})</h2>
            <img className='profile-photo image-wrapper' src={picture} />
            <h3 className='fake-person-title'>Personal info:</h3>
            <ul className='fake-person-list'>
              <li className='fake-person-list-tem'>Phone number: {showPersonalInfo ? phone : '*******'}</li>
              <li className='fake-person-list-tem'>Email address: {showPersonalInfo ? email : '*******'}</li>
            </ul>
            <h3 className='fake-person-title'>Personal login info:</h3>
            <ul className='fake-person-list'>
              <li className='fake-person-list-tem'>Username: {username}</li>
              <li className='fake-person-list-tem'>Password: {password}</li>
            </ul>
            <h3 className='fake-person-title'>Location info:</h3>
            <ul className='fake-person-list'>
              <li className='fake-person-list-tem'>Country: {country}</li>
              <li className='fake-person-list-tem'>City: {city}</li>
            </ul>
            <div className='button-wrapper'>
              <button onClick={personalInfoHandler} className='fake-person-button'>{showPersonalInfo ? 'Hide personal info' : 'Show personal info'}</button>
              <button className='fake-person-button'>Delete this user</button>
            </div>
          </div>
        )}
            
            
      </div>
    </div>
  )
}

export default ApiRandomUserPage