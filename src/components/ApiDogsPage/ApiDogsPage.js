import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './ApiDogsPage.css';

const ApiDogsPage = () => {
    let { breed } = useParams();

    const [breeds, setBreeds] = useState([]);
    const [images, setImages] = useState([]);


    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(res => res.json())
        .then(breedsData => {
            const breedsObjToArr = Object.keys(breedsData.message);
            setBreeds(breedsObjToArr);
        })
    }, []);


    useEffect(() => {
        if (!breed) {
            return;
        }

        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(res => res.json())
            .then(imagesData => {
                setImages(imagesData.message.slice(0, 20));
            })

    }, [breed]);


  return (
    <>
    <div className='dogs-content-wrapper'>
        {breeds && breeds.length > 0 && (
        <div className='breeds-list'>
            {breeds.map((breed, index) => (
                <div 
                    className='breed-item'
                    key={index}
                >
                    <NavLink to={`/apidogs/` + breed}>
                    {breed}
                    </NavLink>
                </div>
            ))}
        </div>
        )}
        {images && images.length > 0 && (
            <div className='images-list'>
                {images.map((image, index) => <img key={index} src={image}/>)}
            </div>
        )}
    </div>
    </>
    
  )
}

export default ApiDogsPage