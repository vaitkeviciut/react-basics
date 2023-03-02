import './Counter.css';
import { useState } from 'react';
import Container from '../Container/Container';

function Counter() {
    const initialCount = 5;
    const initialText = '';
    const [count, setCount] = useState(initialCount);
    const [name, setName] = useState(initialText);
    const [grades, setGrades] = useState([]);

    const counterHandler = num => setCount(prevState => prevState + num);
    const counterInputHandler = (event) => {
        setCount(Number(event.target.value));

        if (Number(event.target.value) > 10) {
            setCount(10)
        } else if (Number(event.target.value) < 1) {
            setCount(1)
        }
    }

    const savedGradeHandler = () => {
        const gradeData = {
            id: Math.random(),
            name,
            number: count,
          }
        setGrades(prevState => [gradeData, ...prevState])
        setCount(initialCount);
        setName('');
        
    }

    const deleteGradeHandler = (id) => setGrades(prevState => prevState.filter(grade => grade.id !== id));


    let classes = count > 4 ? 'text-green' : 'text-red'; 

    return(
        <Container>
            <div className='counter-content-wrapper'>
                <h1 className='counter-title'>Grader</h1>
                <p className='counter-title-description'>Easy and quick grading system</p>
                <div className='counter-form-wrapper'>
                    <div className='counter-wrapper'>
                        <div className='counter-inputs-wrapper'>
                            <div className='counter-input-wrapper'>
                                <label className='name-label' htmlFor='name'>Student name:</label>
                                <input className='counter-input' id='name' type="text" onChange={(event) => setName(event.target.value)} value={name} placeholder="Student name"/>
                            </div>
                            <p className={`counter-original-number ${classes}`}>{count}</p>
                            <div className='counter-input-wrapper'>
                                <div className='grades-wrapper'>
                                    <label className='counter-label' htmlFor='grade'>Student grade:</label>
                                    <input className='counter-input' id='grade' type="number" onChange={counterInputHandler} value={count} min='1' max='10' />
                                </div>
                            </div>
                        </div>
                        
                        <div className='buttons-wrapper'>
                            <button onClick={() => counterHandler(-5)} disabled={count < 6} className="button orange disabled">-5</button>
                            <button onClick={() => counterHandler(-2)} disabled={count < 3} className="button green disabled">-2</button>
                            <button onClick={() => counterHandler(-1)} disabled={count < 2} className="button berry disabled">-1</button>

                            <button onClick={() => (setCount(initialCount)) } className="button blue disabled">Reset</button>

                            <button onClick={() => counterHandler(1)} disabled={count > 9} className="button berry disabled">+1</button> 
                            <button onClick={() => counterHandler(2)} disabled={count > 8} className="button green disabled">+2</button>
                            <button onClick={() => counterHandler(5)} disabled={count > 5} className="button orange disabled">+5</button> 
                        </div>
                    </div>
                    <div className='save-button-wrapper'>
                        <button onClick={savedGradeHandler} className="button purple">Save grade</button>
                    </div>
                    
                </div>
                
            </div>

            <div className='counter-grades-wrapper'>
                <h2 className="text-purple">Grades:</h2>
                {!grades || grades.length == 0 &&
                <p className='no-grades-line'>No saved grades . . .</p>
                }
                {grades && grades.length > 0 && 
                <ul className='grades-output-list'>
                    {grades.map((grade) => 
                    <li className='grades-list-item' key={grade.id}> {grade.name} {grade.number && `(${grade.number})`} <button className='button-delete' onClick={() => deleteGradeHandler(grade.id)}>X</button></li>)
                    }
                </ul>}
            </div>
        </Container>
    )
}
export default Counter;