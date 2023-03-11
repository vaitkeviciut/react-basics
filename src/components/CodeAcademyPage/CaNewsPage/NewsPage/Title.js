import './Title.css'

function Title(props) {

    let titleElement = props.title && <h2 className="title">{props.title}</h2>
    return titleElement;
}
export default Title;