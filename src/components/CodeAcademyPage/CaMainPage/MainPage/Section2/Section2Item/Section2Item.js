import './Section2Item.css'

function Section2Item(props) {

    if (!props.title && !props.description && !props.button) {
        return;
    }

    let title = props.title && <h2 className="main-content-2-header">{props.title}</h2>
    let description = props.description && <p>{props.description}</p>
    let button = props.button && <a className="content-2-button" href="./#">{props.button}</a>

    return (
        <div className="main-content-2-wrapper">
            <div className="main-content-2-text-wrapper">
                <div className="main-content-2-title-wrapper">
                    {title}
                </div>
                <div className="main-content-2-content-wrapper">
                    {description}
                </div>
            </div>
            {button}
        </div>
    )
}
export default Section2Item;