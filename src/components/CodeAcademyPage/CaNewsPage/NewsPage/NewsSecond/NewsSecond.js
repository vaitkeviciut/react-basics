import './NewsSecond.css';
import SecondItem from './SecondItem/SecondItem'


function NewsSecond(props) {
let { data } = props;

if (!data || data.length === 0) {
    return;
}

    let secondaryNews = data.map((news, index) => <SecondItem news={news} key={index}/>)

    return (
        <div className="secondary-news-wrapper">
            
            {secondaryNews}

        </div>
    )
}
export default NewsSecond;