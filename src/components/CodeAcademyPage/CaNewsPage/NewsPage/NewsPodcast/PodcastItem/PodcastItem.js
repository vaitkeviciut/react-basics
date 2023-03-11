import './PodcastItem.css'

function PodcastItem(props) {

    if (!props.title) {
        return;
    }

    let timeText = props.time ? `Trukmė: ${props.time}` : 'Trukmė nenurodyta';
    let dateElement = props.date && <p className="date">{props.date}</p>
    return (
        <div className="podcast">
            <div className="play-juosta">
                <img src={props.image} alt="guy" width="70"/>
                <p className="time">{timeText}</p>
                <a href="./#"><img className="play" src={props.icon} alt="play icon" width="70"/></a>
            </div>
            <div className="podcast-content">
            <p className="content">{props.title}</p>
                {dateElement}
            </div>
            
        </div>
    )
}
export default PodcastItem;