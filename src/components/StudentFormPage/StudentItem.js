// import StudentItemButtons from "./StudentItemButtons";
import React, { useState } from 'react';

const StudentItem = ({ name, surname, age, itKnowledge, group, phone, email, interests, id, onDeleteStudent, onEditStudent }) => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    

    if (!name && !surname) {
        return;
    }

    const personalInfoHandler = () => setShowPersonalInfo(prevState => !prevState);

    


    return (
        <div className="student-item">
            <h3 className="student-output-title">Student Info</h3>
            {name && surname && age && <span className='student-name-surname'>{name} {surname}</span>}
            <div className='student-main-info'>
                
                {age && <h4>Age: <span>{age}</span></h4>}
                {itKnowledge && <h4>IT knowledge: <span>{itKnowledge}</span></h4>}
                {group && <h4>Group: <span>{group.toUpperCase()}gr.</span></h4>}
            </div>
            
            <div className="interests-wrapper">
                <h4 className="student-info-title">Student contacts:</h4>
                <ul>
                    <li>Phone: {showPersonalInfo ? phone : '*******'}</li>
                    <li>Email: {showPersonalInfo ? email : '*******'}</li>
                </ul>
            </div>

            {interests && interests.length > 0 ? (
            <div className="interests-wrapper">
                <h4 className="student-info-title">Student interests:</h4>
                <ul>
                {interests.map((interest, index) => <li key={index}>{interest}</li>)}
                </ul>
            </div>
            ) : (
                <h3 className='student-no-interests'>No interests...</h3>
            )}

            <div className="buttons-wrapper">
                <button onClick={personalInfoHandler} className='student-output-button'>{showPersonalInfo ? 'Hide personal info' : 'Show personal info'}</button>
                <button onClick={() => onDeleteStudent(id)} className='student-output-button'>Delete student</button>
                <button onClick={() => onEditStudent(id)} className='student-output-button'>Edit</button>
            </div>
        </div>
    
    )
}

export default StudentItem