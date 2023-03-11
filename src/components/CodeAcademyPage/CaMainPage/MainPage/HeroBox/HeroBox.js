import './HeroBox.css';
import HeroBoxItem from './HeroBoxItem/HeroBoxItem'

function HeroBox(props) {

    const heroBoxData = [
        {
            title: "Studentams",
            content1: "Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim!",
            content2: "Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai",
            button: "Sužinok daugiau",
        },
        {
            title: "Verslui",
            content1: "Esame geriausias kompanijų draugas Edutech erdvėje.",
            content2: "Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy ",
            button: "Sužinok daugiau",
            className: "border"
        },
    ];

    let heroBoxSections = heroBoxData.map((section, index) => <HeroBoxItem section={section} key={index}/>)

    if (!props.title && !props.description) {
        return;
    }

    let title = props.title && <h1 className="page-title">{props.title}</h1>
    let description = props.description && <p className="page-description">{props.description}</p>

    return (
        <section className="hero-box-container">
            <div className="hero-box-wrapper">
                <div className="hero-box-title-wrapper">
                    {title}
                    {description}
                </div>

                <div className="hero-box-service-wrapper">

                    {heroBoxSections}

                </div>
            </div>
        </section>
    )
}
export default HeroBox;