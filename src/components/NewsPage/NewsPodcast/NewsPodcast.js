import './NewsPodcast.css'
import Title from '../Title'

import PodcastItem from './PodcastItem/PodcastItem'


function NewsPodcast(props) {
let { data } = props;

if (!data || data.length === 0) {
    return;
}

    let podcasts = data.map((podcast, index) => (
            <PodcastItem
            time={podcast.time}
            title={podcast.title}
            date={podcast.date}
            image={podcast.image}
            icon={podcast.icon}
            key={index}
            />
    ))

    return (
        <div className="podcast-wrapper">
            <Title title="Podcastai ir radijo laidos" />

            {podcasts}

        </div>
    )
}
export default NewsPodcast;