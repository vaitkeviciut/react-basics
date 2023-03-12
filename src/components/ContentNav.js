import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'

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
import image12 from './images/api-project.jpg'


const ContentNav = () => {
  return (
    <div>
      <ul className='route-list'>

        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/studentform'><img className='project-pic' src={image7} alt={image7} />
          <h2 className='contentnav-project-title'>Student Form Page</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/StudentFormPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/cars'><img className='project-pic' src={image4} alt={image4} />
          <h2 className='contentnav-project-title'>Cars Form</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/CarsPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/codeacademy'><img className='project-pic' src={image1} alt={image1} />
          <h2 className='contentnav-project-title'>CodeAcademy - Project</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/CodeAcademyPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <a className='route-list-item-link' href='https://vaitkeviciut.github.io/2023-02-13-new-api/' target='_blank' rel='noreferrer'  ><img className='project-pic' src={image12} alt={image12} />
          <h2 className='contentnav-project-title'>API Project Page (API)</h2>
          </a>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/2023-02-13-new-api' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/counter'><img className='project-pic' src={image3} alt={image3} />
          <h2 className='contentnav-project-title'>Grader</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/CounterPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/contacts'><img className='project-pic' src={image2} alt={image2} />
          <h2 className='contentnav-project-title'>Contacts - Project</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/Contacts' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/shoppinglistpage'><img className='project-pic' src={image5} alt={image5} />
          <h2 className='contentnav-project-title'>Shopping List</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/ShoppingListPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/todolist'><img className='project-pic' src={image6} alt={image6} />
          <h2 className='contentnav-project-title'>To Do List</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/ToDoListPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apirandomuser'><img className='project-pic' src={image9} alt={image9} />
          <h2 className='contentnav-project-title'>Random User Generator (API)</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/ApiRandomUserPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apiactivities'><img className='project-pic' src={image8} alt={image8} />
          <h2 className='contentnav-project-title'>Activities Generator (API)</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/ApiActivitiesPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apidogs'><img className='project-pic' src={image11} alt={image11} />
          <h2 className='contentnav-project-title'>Dogs Photos (API)</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/ApiDogsPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        <li className='route-list-item'>
          <NavLink className='route-list-item-link' to='/apichuck'><img className='project-pic' src={image10} alt={image10} />
          <h2 className='contentnav-project-title'>Chuck Norris Jokes (API)</h2>
          </NavLink>
          <a className='project-github-link' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components/ApiChuckPage' target='_blank' rel='noreferrer' >GitHub</a>
        </li>
        
      </ul>
    </div>
          
  )
}

export default ContentNav