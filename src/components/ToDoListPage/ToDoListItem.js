const ToDoListItem = ({data, onDone, onDelete}) => {

  return (
    <li className='todo-list-item' key={data.id}>
        <input className='todo-list-checkbox' type="checkbox" onChange={() => onDone(data.id)}/>
        <span className={`todo-list-text ${data.done ? 'done' : ''}`}>{data.title}</span> 
        
        <button className='button-delete' onClick={() => onDelete(data.id)}>X</button>
        <p className='todo-list-description'>{data.description}</p>
        <span className='todo-list-date'>{data.date}</span>
    </li>
  )
}

export default ToDoListItem