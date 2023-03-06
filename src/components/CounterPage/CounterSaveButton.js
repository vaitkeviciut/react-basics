const CounterSaveButton = ({ onSaveGrade }) => {
  return (
    <button onClick={onSaveGrade} className="button purple">Save grade</button>
  )
}

export default CounterSaveButton