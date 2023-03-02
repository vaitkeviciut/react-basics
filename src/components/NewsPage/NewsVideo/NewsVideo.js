import './NewsVideo.css';
import Title from '../Title'
import NewsAllButton from '../NewsAllButton/NewsAllButton'

function NewsVideo(props) {

    if (!props.url) {
        return;
    }

    let video = props.url && <iframe width="770" height="433" src={props.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    return (
        <div className="video-wrapper">
            <Title title="Vaizdo įrašai" />
            <div className="video">
                {video}
            </div>
            <div className="video-comment">
                <p>{props.subTitle}</p>
            </div> 
            <NewsAllButton
            text="Visi vaizdo įrašai"
            url="./#"
            />
        </div>
    )
}
export default NewsVideo;