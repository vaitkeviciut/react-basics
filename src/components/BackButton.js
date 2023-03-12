import React from 'react'
import { Link } from 'react-router-dom';
import './BackButton.css';
import ArrowIcon from './ArrowIcon';

const BackButton = () => {
  return (
    <div className='contentnav-header-wrapper'>
        <div className='back-button-wrapper'>
            <Link className='link-to-main-menu' to='/'>
                <ArrowIcon />
                <h3 className='back-main-menu-button'>Main Menu</h3>
            </Link>
        </div>
        <div className='name-and-link-wrapper'>
            <h3 className='content-my-name'>Indrė Vaitkevičiūtė</h3>
            <a className='link-to-github-portfolio' href='https://github.com/vaitkeviciut/react-basics/tree/master/src/components' target='_blank' rel='noreferrer' >GitHub</a>
        </div>
    </div>
  )
}

export default BackButton