import './ProgramsFilter.css';                    

function ProgramsFilter(props) {

    if (!props.theme && !props.place && !props.type && !props.time) {
        return;
    }

    let theme = props.theme && (
    <span className="heavy">{props.theme}</span>
    
    )
    let place = props.place && <span className="heavy">{props.place}</span>
    let type = props.type && <span className="heavy">{props.type}</span>
    let time = props.time && <span className="heavy">{props.time}</span>

    return (
        <div>
            <div className="filters-wrapper">
                <h2 className="wrapper-header">{props.title}</h2>

                <div className="filters">
                    {theme}
                    <input className="button-select" type="button" value="Visos"/>
                    {place}
                    <input className="button-select" type="button" value="Visos"/>
                    {type}
                    <input className="button-select" type="button" value="Visi"/>
                </div>
            
                <div className="time-wrapper">
                    {time}
                    <div className="laikas">
                        <div className="day">
                            <input className="checkbox" type="checkbox"/>
                            <span className="light">{props.day}</span>
                        </div>
                        <div className="night">
                            <input className="checkbox" type="checkbox"/>
                            <span className="light">{props.night}</span>
                        </div>
                    </div>
                </div>
            
                <input className="button-blue" type="button" value="Išvalyti"/>
            </div>
        </div>
    );
}
export default ProgramsFilter;