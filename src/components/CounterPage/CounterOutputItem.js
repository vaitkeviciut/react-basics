const CounterOutputItem = ({ data, onDelete }) => {
  return (
    <li className='grades-list-item' key={data.id}> {data.name} {data.number && `(${data.number})`} <button className='button-delete' onClick={() => onDelete(data.id)}>X</button></li>
  )
}

export default CounterOutputItem