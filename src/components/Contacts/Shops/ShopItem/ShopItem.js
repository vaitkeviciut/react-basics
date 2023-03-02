import './ShopItem.css';

function ShopItem(props) {
    return (
        <div className="shop">
            <h2 className="shop-title">{props.title}</h2>
            <ul className="shop-list">
                <li>Phone: <a href={props.mobileUrl}>{props.mobile}</a></li>
                <li>Email: <a href={props.emailUrl}>{props.email}</a></li>
                <li>Address: <a href={props.addressUrl}>{props.address}</a></li>
            </ul>
        </div>
    )
}
export default ShopItem;