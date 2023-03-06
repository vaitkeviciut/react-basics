const CounterInputsName = ({ name, setName }) => {
  return (
    <>
      <label className='name-label' htmlFor='name'>Student name:</label>
      <input className='counter-input' id='name' type="text" onChange={(event) => {setName(event.target.value)}} value={name} placeholder="Student name"/>
    </>
  )
}

export default CounterInputsName