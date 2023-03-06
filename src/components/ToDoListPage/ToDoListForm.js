const ToDoListForm = ({ title, description, onAddTask, onInput, onDescriptionInput }) => {
  return (
    <form className='todo-list-form' onSubmit={onAddTask}>
        <div className='todo-form-control-wrapper'>
            <label className='todo-item-label' htmlFor='todo-item-input'>Action:</label>
            <input className='todo-item-input'
            type='text'
            id='todo-item-input'
            value={title}
            onChange={onInput}
            />
        </div>
        <div className='todo-form-control-wrapper'>
            <label className='todo-item-label' htmlFor='description'>Task Description:</label>
            <textarea className='description'
            id='description'
            rows='7'
            value={description}
            onChange={onDescriptionInput}
            ></textarea>
        </div>
        <div className='submit-button-wrapper'>
          {title && description && <input className='todo-submit-button' type="submit" value='Add Task'/>}
            
        </div>
    </form>
  )
}

export default ToDoListForm