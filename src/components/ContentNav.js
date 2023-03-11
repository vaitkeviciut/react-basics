import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import BackButton from './BackButton';

import image1 from './images/ca-page.jpg'
import image2 from './images/contacts.jpg'
import image3 from './images/counter.jpg'
import image4 from './images/cars.jpg'
import image5 from './images/shop.jpg'
import image6 from './images/to-do.jpg'
import image7 from './images/student-form-content.jpg'
import image8 from './images/bored.jpg'
import image9 from './images/random.jpg'
import image10 from './images/chuck.jpg'
import image11 from './images/dogs.jpg'


const ContentNav = () => {
  return (
    <div>
      <BackButton />
      <ul className='route-list'>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/codeacademy'><img className='project-pic' src={image1} alt={image1} />CodeAcademy - Project</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/contacts'><img className='project-pic' src={image2} alt={image2} />Contacts - Project</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/counter'><img className='project-pic' src={image3} alt={image3} />Grader</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/cars'><img className='project-pic' src={image4} alt={image4} />Cars Form</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/shoppinglistpage'><img className='project-pic' src={image5} alt={image5} />Shopping List</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/todolist'><img className='project-pic' src={image6} alt={image6} />To Do List</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/studentform'><img className='project-pic' src={image7} alt={image7} />Student Form Page</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apiactivities'><img className='project-pic' src={image8} alt={image8} />Activities Generator (API)</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apirandomuser'><img className='project-pic' src={image9} alt={image9} />Random User Generator (API)</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apichuck'><img className='project-pic' src={image10} alt={image10} />Chuck Norris Jokes (API)</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apidogs'><img className='project-pic' src={image11} alt={image11} />Dogs Photos (API)</NavLink>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apipage'>Api Page (API)</NavLink>
        </li>
      </ul>
    </div>
          
  )
}

export default ContentNav