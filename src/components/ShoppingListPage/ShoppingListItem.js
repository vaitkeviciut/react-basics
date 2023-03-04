const ShoppingListItem = ({ data, onDone, onDelete }) => {
  return (
    <li className='shopping-list-item' key={data.key}>
        <input className='shopping-list-checkbox' type="checkbox" onChange={() => onDone(data.id)} />
        <span className={data.done ? 'done' : ''}>{data.title}</span> 
        <button className='button-delete' onClick={() => onDelete(data.id)}>X</button>
    </li>
  )
}

export default ShoppingListItem