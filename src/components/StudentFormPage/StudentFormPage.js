import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import HeroTextWrapper from './HeroTextWrapper';
import HeroButton from './HeroButton';
import StudentItem from './StudentItem';
import './StudentFormPage.css';


const StudentFormPage = () => {
    const groupsData = ['feu 1', 'feu 2', 'feu 3', 'feu 4', 'feu 5'];
    const interestsData = ['Java', 'JavaScript', 'PHP', 'Python', 'C++', 'Swift'];

    const formDefaluts = {
        id: null,
        name: '',
        surname: '',
        age: '',
        phone: '',
        email: '', 
        itKnowledge: '5',
        group: [],
        interests: [],
    }

    const [studentsList, setStudentsList] = useState([
        {
            id: uuid(),
            name: 'John',
            surname: 'Doe',
            age: 27,
            phone: '+37065555523',
            email: 'johndoe@mail.com',
            itKnowledge: 9,
            group: 'feu 1',
            interests: ['Java', 'PHP', 'C++'],
        },
        {
            id: uuid(),
            name: 'Tom',
            surname: 'Doe',
            age: 25,
            phone: '+37065544523',
            email: 'tomdoe@mail.com',
            itKnowledge: 6,
            group: 'feu 2',
            interests: ['JavaScript'],
        },
        {
            id: uuid(),
            name: 'Angela',
            surname: 'Collins',
            age: 29,
            phone: '+37067744523',
            email: 'angelacollins@mail.com',
            itKnowledge: 5,
            group: 'feu 3',
            interests: ['JavaScript', 'Python', 'Java'],
        },
        {
            id: uuid(),
            name: 'Daniela',
            surname: 'Drew',
            age: 32,
            phone: '+37067654523',
            email: 'danieladrew@mail.com',
            itKnowledge: 10,
            group: 'feu 4',
            interests: ['JavaScript', 'Java', 'C++', 'Swift'],
        },
        {
            id: uuid(),
            name: 'Mika',
            surname: 'Leaf',
            age: 36,
            phone: '+37062214523',
            email: 'mikaleaf@mail.com',
            itKnowledge: 8,
            group: 'feu 5',
            interests: ['PHP', 'Python'],
        },
    ]);

    const [formData, setFormData] = useState(formDefaluts);


    const formInputHandler = (event) => {
        setFormData(prevState => {
            const updatedData = {...prevState};
            updatedData[event.target.name] = event.target.value;
            return updatedData;
        });
    };

    const interestChangeHandler = (event) => {
        setFormData(prevState => {
            const value = event.target.value;
            const updatedData = {...prevState};

            if (updatedData.interests.includes(value)) {
                updatedData.interests = updatedData.interests.filter(interest => interest !== value);
            } else {
                updatedData.interests = [...updatedData.interests, value];
            }
            return updatedData;
        })
    }

    const createStudentHandler = (event) => {
        event.preventDefault()

        if (formData.id) {
            setStudentsList(prevState => {
            const updatedData = [...prevState];
            const editStudentIndex = updatedData.findIndex(student => student.id === formData.id);
            updatedData.splice(editStudentIndex, 1, formData)
            return updatedData;
            });
            
        } else {
            setStudentsList(prevState => [{...formData, id: uuid()}, ...prevState]);
        }
        setFormData(formDefaluts);
    }
    
    const deleteStudentHandler = id => setStudentsList(prevState => prevState.filter(student => student.id !== id));

    const editStudentHandler = id => {
        const editStudentData = studentsList.find(student => student.id === id);

        setFormData(editStudentData)
        }


  return (
    <>
    <div className='student-form-page-wrapper'>
        
        <div className="hero-box-content-wrapper">
            <div className="hero-content-wrapper">
                
                <HeroTextWrapper
                title='Interested in IT?'
                description='Fill out a form and start your journey in IT'
                />

                <HeroButton text='Form' />
            </div>
        </div>

        <div className="form-list-wrapper">
            <div id="form-wrapper">
                <h2 className="form-title">Student form</h2>
                <form id="student-form" noValidate onSubmit={createStudentHandler}>
                    <div className="input-group">
                        <label className='student-form-label' htmlFor="name">Name</label>
                        <input
                        className="input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        minLength="2"
                        maxLength="25"
                        value={formData.name}
                        onChange={formInputHandler}
                        required
                        />
                    </div>
                    <div className="input-group">
                        <label className='student-form-label' htmlFor="surname">Last name</label>
                        <input
                        className="input"
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        minLength="2"
                        maxLength="35"
                        value={formData.surname}
                        onChange={formInputHandler}
                        required
                        />
                    </div>
                    <div className="input-group">
                        <label className='student-form-label' htmlFor="age">Age</label>
                        <input
                        className="input"
                        type="number"
                        name="age"
                        id="age"
                        min="1"
                        max="100"
                        step="1"
                        placeholder="Age"
                        value={formData.age}
                        onChange={formInputHandler}
                        required
                        />
                    </div>
                    <div className="input-group">
                        <label className='student-form-label' htmlFor="phone">Phone number</label>
                        <input
                        className="input"
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={formInputHandler}
                        required
                        />
                    </div>
                    <div className="input-group">
                        <label className='student-form-label' htmlFor="email">Email</label>
                        <input
                        className="input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={formInputHandler}
                        required
                        />
                    </div>
                    <div className="input-group-it">
                        <label className='student-form-label' htmlFor="it-knowledge">IT knowledge</label>
                        <input
                        type="range"
                        name="itKnowledge"
                        id="it-knowledge"
                        min="1"
                        max="10"
                        step="1"
                        value={formData.itKnowledge}
                        onChange={formInputHandler}
                        />
                        <output id="value">{formData.itKnowledge}</output>
                    </div>

                    <div className="fieldset-wrapper">
                        <fieldset className="radio-group">
                            <legend>Choose a group:</legend>
                            {groupsData.map((group, index) => (
                                <div key={index}>
                                    <input
                                    type="radio"
                                    name="group"
                                    id={`group-${index}`}
                                    value={group}
                                    onChange={formInputHandler}
                                    checked={formData.group === group}
                                    />
                                    <label htmlFor={`group-${index}`}>{group.toUpperCase()}gr.</label>
                                </div>
                            ))}
                        </fieldset>

                        <fieldset className="checkbox-group">
                            <legend>Choose IT language:</legend>
                            {interestsData.map((interest, index) => (
                                <div key={index}>
                                    <input 
                                    type="checkbox" 
                                    name="interest" 
                                    id={`interest-${index}`} 
                                    value={interest}
                                    checked={formData.interests.includes(interest)}
                                    onChange={interestChangeHandler}
                                    />
                                    <label htmlFor={`interest-${index}`} >{interest}</label>
                                </div>
                            ))}
                        </fieldset>
                    </div>
                    

                    <input 
                    className="submit-button" 
                    type="submit" 
                    value={formData.id ? 'Save Changes' : 'Register Student'}
                    />

                </form>
            </div>
            
            <div id="students-list">
            {studentsList && studentsList.length > 0 && studentsList.map(student => (
            <StudentItem 
            onDeleteStudent={deleteStudentHandler} 
            onEditStudent={editStudentHandler} 
            {...student} 
            key={student.id} 
            />
            )
            )}
            </div>
        </div>
    </div>
    </>
    
  )
}

export default StudentFormPage