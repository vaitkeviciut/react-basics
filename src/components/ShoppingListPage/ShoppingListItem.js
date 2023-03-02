function ShoppingListItem(props) {
    let { title, done } = props.item;
    
    return (
        <li className="shopping-list-item"><input type="checkbox" ></input>{title}</li>
    )
}
export default ShoppingListItem;