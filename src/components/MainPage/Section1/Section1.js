import './Section1.css'

import Section1Item from './Section1Item/Section1Item'

function Section1(props) {
    let { title, description } = props

    const section1Data = [
        {
            number: "1298",
            comment: "Šiuo metu mokosi studentų"
        },
        {
            number: "4762",
            comment: "Viso baigė studentų"
        },
        {
            number: "80%",
            comment: "Baigę Pažengusių studijas įsidarbino"
        },
        {
            number: "Front-End",
            comment: "Populiariausia programa",
            className: "small"
        },
    ];

    let sections = section1Data.map((section, index) => <Section1Item section={section} key={index}/>)

    let pageTitle = title && <h2 className="main-content-1-header">{title}</h2>
    let pageDescription = description && <p>{description}</p>

    return (
        <section className="main-content-1-container">
            <div className="main-content-1-wrapper">
                <div className="main-content-1-title-wrapper">
                    {pageTitle}
                </div>

                <div className="main-content-1-facts-wrapper">
                    <div className="main-content-1-facts-description">
                        {pageDescription}
                    </div>
                    <div className="main-content-1-facts-list-wrapper">
                        <ul className="main-content-1-facts-list">
                            {sections}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section1;