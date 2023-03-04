const ToDoListItem = ({task, onDone, onDelete}) => {

  return (
    <li className='todo-list-item' key={task.id}>
        <input className='todo-list-checkbox' type="checkbox" onChange={() => onDone(task.id)}/>
        <span className={`todo-list-text ${task.done ? 'done' : ''}`}>{task.title}</span> 
        
        <button className='button-delete' onClick={() => onDelete(task.id)}>X</button>
        <p className='todo-list-description'>{task.description}</p>
        <span className='todo-list-date'>{task.date}</span>
    </li>
  )
}

export default ToDoListItem