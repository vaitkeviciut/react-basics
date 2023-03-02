import ProgramItem from './ProgramItem/ProgramItem';
import './ProgramsList.css';

import illustration1 from '../../images/ca-1.svg';
import illustration2 from '../../images/ca-2.svg';
import illustration3 from '../../images/ca-3-4.svg';
import illustration5 from '../../images/ca-5.svg';
import illustration6 from '../../images/ca-6.svg';
// import cap from '../../images/graduate-cap.png'
// import moon from '../../images/moon.png';
// import sun from '../../images/sun.png';
import MoonIcon from '../../MoonIcon';
import SunIcon from '../../SunIcon';
import CapIcon from '../../CapIcon';

function ProgramsList() {

    const programsListData = [
        {
            image: illustration1,
            title: '„Salesforce“ CRM – pradedančių',
            content: '„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.',
            pink: "Naujas",
            levels: [
                {
                    icon: <CapIcon />,
                    text: "1 Lygis"
                },
                {
                    icon: <MoonIcon />,
                    text: "Vakarais"
                },
            ]
        },

        {
            image: illustration2,
            title: 'Python – pradedantiesiems užimtiems asmenims (223002626)',
            content: 'Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.',
            levels: [
                {
                    icon: <CapIcon />,
                    text: "Finansuojama UŽT - dirbantiems"
                },
                {
                    icon: <MoonIcon />,
                    text: "Vakarais"
                },
            ],
            pink: "Finansuojama UŽT"
        },
        {
            image: illustration3,
            title: 'Frontend Serverless (223002583)',
            content: 'Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.',
            levels: [
                {
                    icon: <SunIcon />,
                    text: "Dienomis"
                },
            ],
            pink: "Naujas" 
        },
        {
            image: illustration3,
            title: 'Frontend pradedantiesiems užimtiems asmenims (223002622)',
            content: 'Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio ir, suprantama, pakankamai glaudžiai susijęs su web dizainu.',
            levels: [
                {
                    icon: <CapIcon />,
                    text: "Finansuojama UŽT - dirbantiems"
                },
                {
                    icon: <MoonIcon />,
                    text: "Vakarais"
                },
            ],
            pink: "Finansuojama UŽT" 
        },
        {
            image: illustration5,
            title: 'Web dizainas UX/UI (223002606)',
            content: 'Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.',
            levels: [
                {
                    icon: <SunIcon />,
                    text: "Dienomis"
                },
            ],
            pink: "Naujas" 
        },
        {
            image: illustration6,
            title: 'TypeScript programa (223002404)',
            content: 'Front-End programuotojas – tikra būtinybė moderniam verslui, todėl ši sritis yra paklausiausia darbo rinkoje.',
            levels: [
                {
                    icon: <SunIcon />,
                    text: "Dienomis"
                },
            ],
            pink: "Naujas" 
        },
    ];

    let programs = programsListData.map((program, index) => <ProgramItem program={program} key={index} />);

    return (
        <div className="programos-wrapper">

            {programs}

        </div>
    )
}
export default ProgramsList;