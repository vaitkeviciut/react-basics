import './Banner.css'
import next from '../../../../images/next.png'

function Banner(props) {
    return(
        <div className="image-container">
            <a className="image-link" href="./#">
                <div className="image-content">
                    <div className="text">
                        <span className="pink">{props.title}</span>
                        <span className="black">{props.text}</span>
                    </div> 
                    <img className="arrow" src={next} alt="arrow" width="50"/>
                </div>   
            </a>
        </div>
    )
}
export default Banner