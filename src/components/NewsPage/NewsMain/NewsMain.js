import './NewsMain.css';

import MainItem from './MainItem/MainItem'

function NewsMain(props) {
let { data } = props;

if (!data || data.length === 0) {
    return;
}
    
    let mainNews = data.map((news, index) => <MainItem news={news} key={index}/>);

    return (
        <div className="main-news-wrapper">   
            
        {mainNews}

        </div>
    )
}
export default NewsMain;