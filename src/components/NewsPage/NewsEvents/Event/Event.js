import './Event.css'


function Event(props) {
    let { image, location, title, day, month, url } = props.event;

    if (!title) {
        return;
    }

    return(
        <a className="renginiai-link" href={url}>
            <div className="renginys-2">
                {image && <img src={image} alt={title} width="350"/>}
                {location && <p className="help-text">{location}</p>}
                <p className="main-text">{title}</p>

                {(day || month) && (
                    <div className="renginiai-data-wrapper">
                        {day && <span className="renginiai-data-diena">{day}</span>}
                        {month && <span className="renginiai-data-men">{month}</span>}
                    </div>
                )}
                
            </div>
        </a>
    )
}
export default Event;