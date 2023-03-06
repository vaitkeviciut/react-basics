const CounterButtons = ({ count, onCount, setCount, initialCount }) => {
  return (
    <div className='buttons-wrapper'>
        <button onClick={() => onCount(-5)} disabled={count < 6} className="button orange disabled">-5</button>
        <button onClick={() => onCount(-2)} disabled={count < 3} className="button green disabled">-2</button>
        <button onClick={() => onCount(-1)} disabled={count < 2} className="button berry disabled">-1</button>

        <button onClick={() => (setCount({initialCount})) } className="button blue disabled">Reset</button>

        <button onClick={() => onCount(1)} disabled={count > 9} className="button berry disabled">+1</button> 
        <button onClick={() => onCount(2)} disabled={count > 8} className="button green disabled">+2</button>
        <button onClick={() => onCount(5)} disabled={count > 5} className="button orange disabled">+5</button> 
    </div>
  )
}

export default CounterButtons