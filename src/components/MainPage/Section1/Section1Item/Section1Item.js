import './Section1Item.css'

function Section1Item(props) {
    let { number, comment, className } = props.section

    if (!number || !comment) {
        return;
    } 

    return (
        <li className="main-content-1-facts-list-item">
            {number && <div className={`fact-list-value ${className}`}>{number}</div>}
            {comment && <div className="fact-list-description">{comment}</div>}
        </li>
    )
}
export default Section1Item;