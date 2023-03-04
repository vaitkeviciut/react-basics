const ShoppingListForm = ({ input, onSubmit, onInput }) => {
  return (
    <form className='shopping-list-form' onSubmit={onSubmit}>
        <div className='shopping-form-control-wrapper'>
            <label className='shopping-item-label' htmlFor='shopping-item-input'>Shopping item:</label>
            <input className='shopping-item-input'
            type='text'
            id='shopping-item-input'
            value={input}
            onChange={onInput}
            />
        </div>
        <div className='submit-button-wrapper'>
            <input className='shopping-submit-button' type="submit" />
        </div>
    </form>
  )
}

export default ShoppingListForm