import './NewsEvents.css'
import Title from '../Title'

import Event from './Event/Event';
import NewsAllButton from '../NewsAllButton/NewsAllButton'


function NewsEvents(props) {
    let { data } = props;

    if (!data || data.length === 0) {
        return;
    }

    let events = data.map((event, index) => <Event event={event} key={index}/>);

    return (
        <div className="renginiai-wrapper">
            <Title title="Renginiai" />

            {events}

            <NewsAllButton text="Daugiau" url="./#" />
        </div>
    )
}
export default NewsEvents;