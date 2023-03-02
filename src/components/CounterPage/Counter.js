import './Counter.css';
import { useState } from 'react';
import Container from '../Container/Container';

function Counter() {
    const initialCount = 5
    const [count, setCount] = useState(initialCount);

    function counterHandler(num) {
        setCount(count + num);
    }

    let classes = count > 4 ? 'text-green' : 'text-red'; 

    const counterInputHandler = (event) => {
        setCount(Number(event.target.value));

        if (Number(event.target.value) > 10) {
            setCount(10)
        } else if (Number(event.target.value) < 1) {
            setCount(1)
        }
    }

    return(
        <Container>
            <div className='counter-content-wrapper'>
                <h1>Let's count!</h1> 
                <p className={`counter-original-number ${classes}`}>{count}</p>

                <div className='buttons-wrapper'>
                    <button onClick={() => counterHandler(-5)} disabled={count < 6} className="button orange disabled">-5</button>
                    <button onClick={() => counterHandler(-2)} disabled={count < 3} className="button green disabled">-2</button>
                    <button onClick={() => counterHandler(-1)} disabled={count < 2} className="button berry disabled">-1</button>

                    <input className='counter-input' type="number" onChange={counterInputHandler} value={count} min='1' max='10' />

                    <button onClick={() => setCount(initialCount)} className="button blue disabled">Reset</button>

                    <button onClick={() => counterHandler(1)} disabled={count > 9} className="button berry disabled">+1</button> 
                    <button onClick={() => counterHandler(2)} disabled={count > 8} className="button green disabled">+2</button>
                    <button onClick={() => counterHandler(5)} disabled={count > 5} className="button orange disabled">+5</button> 
                </div>
            </div>
        </Container>
    )
}
export default Counter;