import './ProgramItem.css';

function ProgramItem(props) {
    let { image, title, content, levels, pink } = props.program

    let levelsItem = levels && levels.map((level, index) => {
        return <li className="icon-list" key={index}><span>{level.icon}</span><span className="list-item">{level.text}</span></li>
        
    })

    if (!title && !content) {
        return;
    }

    return (
        <div className="programa-wrapper" ><a className="link" href="./#"> 
                <div className="group">
                    <img className="image" src={image} alt="program" width="100"/>
                    <div className="content-wrapper">
                    {title && <h2 className="wrapper-header">{title}</h2>}
                    {content && <p className="content">{content}</p>}
                    </div>
                </div>
                
                <div className="list">
                    
                    <ul className="list-items">
                        {levelsItem} 
                    </ul>
                </div>
            </a>
            <div className="islindes">
                <span className="ruzavas">{pink}</span>
            </div>
            
        </div>
    )
}
export default ProgramItem;