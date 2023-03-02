import './HeroBoxItem.css'

function HeroBoxItem(props) {
    let { title, content1, content2, button, className } = props.section

    if (!title && !button) {
        return;
    }

    return (
        <div className={`service-item ${className}`}>
            <div className="service-content-wrapper">
                {title && <h2 className="service-title">{title}</h2>}
                <div className="service-text">
                    {content1 && <p>{content1}</p>}
                    {content2 && <p>{content2}</p>}
                </div>
            </div>
            {button && <a className="service-button" href="./#">{button}</a>}
        </div>
    )
}
export default HeroBoxItem;