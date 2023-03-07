const ShoppingListItem = ({ data, onDone, onDelete }) => {
  return (
    <li className={`shopping-list-item ${data.done ? 'done' : ''}`} key={data.key}>
        <input className='shopping-list-checkbox' type="checkbox" onChange={() => onDone(data.id)} />
        <span className='shopping-list-item-text'>{data.title}</span> 
        <button className='button-delete' onClick={() => onDelete(data.id)}>X</button>
    </li>
  )
}

export default ShoppingListItem