import './NewsPage.css';
import Header from '../../CaHeader/Header/Header'
import Footer from '../../CaFooter/Footer/Footer'

import NewsMenu from './NewsMenu/NewsMenu'
import NewsMain from './NewsMain/NewsMain'
import NewsSecond from './NewsSecond/NewsSecond'
import NewsAllButton from './NewsAllButton/NewsAllButton'
import NewsVideo from './NewsVideo/NewsVideo'
import NewsPodcast from './NewsPodcast/NewsPodcast'
import NewsEvents from './NewsEvents/NewsEvents'
import Title from './Title';
import Container from '../../../Container/Container';

import main1 from '../../../images/main-news-1.jpg';
import main2 from '../../../images/main-news-2.jpg';
import guy from '../../../images/guy.png';
import play from '../../../images/play.png';
import sec1 from '../../../images/secondary-news-1.jpg'
import sec2 from '../../../images/secondary-news-2.jpg'
import sec3 from '../../../images/secondary-news-3.jpg'
import sec4 from '../../../images/secondary-news-4.jpg'


function NewsPage() {

    const newsMenuData = [
        {
            title: 'Apie mus',
            url: './#'
        },
        {
            title: 'Naujienos',
            url: './#'
        },
        {
            title: 'Dėstytojai',
            url: './#'
        },
        {
            title: 'Karjera',
            url: './#'
        },
        {
            title: 'ES parama',
            url: './#'
        },
    ];

    const mainNewsData = [
        {
            image: main1,
            news: 'Ai & deep learning',
            title: 'Ar "ChatGPT" užims mūsų darbo vietas?',
            date: '2023-01-27'
        },
        {
            image: main2,
            news: 'Naujienos',
            title: 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?',
            date: '2022-12-12'
        },
    ];

    const secondNewsData = [
        {
            image: sec1,
            news: 'Naujienos',
            title: 'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?',
            date: '2022-03-23'
        },
        {
            image: sec2,
            news: 'Naujienos',
            title: 'CodeAcademy“ projektinė veikla – indėlis į gražesnę ateitį',
            date: '2021-11-09'
        },
        {
            image: sec3,
            news: 'Technologijų ritmu',
            title: 'Kaip po chaotiškų mokslo metų pandemijos apsuptyje padėti vaikams sugrįžti į klases?',
            date: '2021-09-02'
        },
        {
            image: sec4,
            news: 'Technologijų ritmu',
            title: 'Ar skaitmeninė mada išties yra ekologiška industrijos gelbėtoja?',
            date: '2021-09-02'
        },
    ];

    const podcastData = [
        {
            time: "7:55",
            title: "Pojūčius pištų galiukams sugrąžinti gali smegenų implantas",
            date: "2021-09-02",
            image: guy,
            icon: play
        },
        {
            time: "7:54",
            title: "Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“",
            date: "2021-08-25",
            image: guy,
            icon: play
        },
        {
            time: "9:22",
            title: "Kaip gyvensime 2031-aisiais? 10 esminių prognozių",
            date: "2021-08-18",
            image: guy,
            icon: play
        },
        {
            time: "8:32",
            title: "Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“",
            date: "2021-08-11",
            image: guy,
            icon: play
        },
    ];

    const eventsData = [
        {
            image: "https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-300x300.png",
            location: 'Online',
            title: 'CodeAcademy Talents',
            day: '10',
            month: 'Lie',
            url: './#'
        },
        {
            location: '',
            title: 'Intro: "Salesforce" CRM',
            day: '27',
            month: 'Rug', 
            url: './#'
        },
        {
            location: 'Online',
            title: 'Intro: Dirbtinis intelektas ir Duomenų mokslas',
            day: '5',
            month: 'Rug', 
            url: './#'
        },
    ];

    let newsMenu = newsMenuData.map((menu, index) => <NewsMenu menu={menu} key={index}/>);

    return (
    <>
        <Header />
        <Container>
            <div className='news-container'>
                <div className="menu-container">
                    <div className="menu-wrapper">
                        <ul className="menu">

                            {newsMenu}
                            
                        </ul>
                    </div>
                </div>

                <div className="both-sides-content-wrapper">
                    <div className="content-wrapper-left">
                        
                        <div className="news-wrapper">

                            <Title title="Naujienos" />

                            <NewsMain data={mainNewsData} />

                            <NewsSecond data={secondNewsData} />
                
                            <NewsAllButton
                            text="Visos naujienos"
                            url="./#"
                            />
                        </div>
                
                        <NewsVideo
                        url="https://www.youtube.com/embed/b8dGCsP75HA"
                        subTitle="Jei galiu aš - gali ir tu!"
                        />
                    </div>
                
                
                    <div className="content-wrapper-right">

                        <NewsPodcast data={podcastData} />

                        <NewsEvents data={eventsData} />
                    
                    </div>
                
                    
                </div>
                
            </div>
        </Container>
        <Footer />
    </>
    );
}
export default NewsPage;