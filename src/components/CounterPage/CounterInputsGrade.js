const CounterInputsGrade = ({ count, onCounterInput }) => {
  return (
    <>
        <label className='counter-label' htmlFor='grade'>Student grade:</label>
        <input className='counter-input' id='grade' type="number" onChange={onCounterInput} value={count} min='1' max='10' />
    </>
  )
}

export default CounterInputsGrade