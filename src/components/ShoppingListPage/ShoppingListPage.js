import ShoppingListItem from './ShoppingListItem'

function ShoppingListPage() {

    const shoppingList = [
        {
            title: 'eggs',
            done: true
        },
        {
            title: 'salad',
            done: false
        },
        {
            title: 'cucumber',
            done: false
        },
        {
            title: 'tomatoes',
            done: false
        },
        {
            title: 'bread',
            done: false
        },
        {
            title: 'meat',
            done: false
        },
    ]

    let shoppingListItem = shoppingList.map((item, index) => <ShoppingListItem item={item} key={index} />)

    return (
        <div>
            <h1>Shopping List</h1>
            {!shoppingList || shoppingList.length == 0 &&
                <p>Your shopping list is empty</p>
                }
                {shoppingList && shoppingList.length > 0 && 
                    <form className='shopping-list-form'>
                        <div className='form-control-shopping'>
                            <input className='checkbox'
                            type='checkbox'
                            id='checkbox'
                            />
                            {shoppingListItem}
                        </div>
                    </form>
                }
        </div>
    )
}
export default ShoppingListPage;