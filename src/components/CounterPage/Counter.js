import './Counter.css';
import { useState } from 'react';
import Container from '../Container/Container';
import CounterButtons from './CounterButtons';
import CounterOutput from './CounterOutput';
import CounterInputsName from './CounterInputsName';
import CounterInputsGrade from './CounterInputsGrade';
import CounterSaveButton from './CounterSaveButton';

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
                                
                                <CounterInputsName
                                name={name}
                                setName={setName}
                                />

                            </div>
                            <p className={`counter-original-number ${classes}`}>{count}</p>
                            <div className='counter-input-wrapper'>
                                <div className='grades-wrapper'>

                                    <CounterInputsGrade
                                    count={count}
                                    onCounterInput={counterInputHandler}
                                    />

                                </div>
                            </div>
                        </div>
                        
                        <CounterButtons
                        count={count}
                        onCount={counterHandler}
                        setCount={setCount}
                        initialCount={initialCount}
                        />


                    </div>
                    <div className='save-button-wrapper'>

                        <CounterSaveButton onSaveGrade={savedGradeHandler} />

                    </div>
                    
                </div>
                
            </div>

            <CounterOutput
            grades={grades}
            onDelete={deleteGradeHandler}
            />


        </Container>
    )
}
export default Counter;