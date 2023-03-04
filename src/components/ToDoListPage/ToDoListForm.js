const ToDoListForm = ({ input, descriptionInput, onAddTask, onInput, onDescriptionInput }) => {
  return (
    <form className='todo-list-form' onSubmit={onAddTask}>
        <div className='todo-form-control-wrapper'>
            <label className='todo-item-label' htmlFor='todo-item-input'>Action:</label>
            <input className='todo-item-input'
            type='text'
            id='todo-item-input'
            value={input}
            onChange={onInput}
            />
        </div>
        <div className='todo-form-control-wrapper'>
            <label className='todo-item-label' htmlFor='description'>Task Description:</label>
            <textarea className='description'
            id='description'
            rows='7'
            value={descriptionInput}
            onChange={onDescriptionInput}
            ></textarea>
        </div>
        <div className='submit-button-wrapper'>
            <input className='todo-submit-button' type="submit" value='Add Task'/>
        </div>
    </form>
  )
}

export default ToDoListForm