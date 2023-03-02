import './SecondItem.css';

function SecondItem(props) {
    let { image, news, date, title } = props.news

    if (!title) {
        return;
    }

    let newsHeader = news && <h2 className="secondary-news-header">{news}</h2>;
    let newsDate = date && <h4 className="secondary-news-date">{date}</h4>

    return (
        <div className="secondary-news"><a className="secondary-news-link" href="./#" target="_blank">
                <div className="secondary-news-image">
                    <img src={image} alt="secondary news" width="120px"/>
                </div>
                <div className="secondary-news-content">
                    {newsHeader}
                    <h3 className="secondary-news-title">{title}</h3>
                    {newsDate}
                </div>
            </a>
        </div>
    )
}
export default SecondItem;