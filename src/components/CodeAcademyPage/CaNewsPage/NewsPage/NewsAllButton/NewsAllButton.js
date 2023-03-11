import './NewsAllButton.css';
import next from '../../../../images/next.png';

function NewsAllButton(props) {

    if (!props.text && !props.url) {
        return;
    }

    let textElement = props.text && <a className="all-news-link" href={props.url ? props.url : './#'}>{props.text}<img className="next" src={next} alt="arrow" width="35"/></a>

    return (
        <div className="all-news">
            {textElement}
        </div>
    )
}
export default NewsAllButton;