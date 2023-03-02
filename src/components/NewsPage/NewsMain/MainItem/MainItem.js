import './MainItem.css'


function MainItem(props) {

    let { image, news, date, title } = props.news

    if (!title) {
        return;
    }

    let newsHeader = news && <h2 className="main-news-header">{news}</h2>
    let newsDate = date && <h4 className="main-news-date">{date}</h4>

    return (
        <div className="main-news"><a className="main-news-link" href="./#" target="_blank">
                <div className="main-news-image-1">
                    <img src={image} width="1024" alt="main news"/>
                </div>
                <div className="main-news-content">
                    {newsHeader}
                    <h3 className="main-news-title">{title}</h3>
                    {newsDate}
                </div>
            </a>
        </div>
    )
}
export default MainItem;