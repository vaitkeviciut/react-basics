import './NewsMenu.css';

function NewsMenu(props) {
    let { title, url } = props.menu;

    return (
            <li className="menu-item"><a className="menu-link" href={url}>{title}</a></li>
    )
}
export default NewsMenu;