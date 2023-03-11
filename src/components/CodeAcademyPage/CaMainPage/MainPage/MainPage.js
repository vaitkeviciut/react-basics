import './MainPage.css';
import BackButton from '../../../BackButton';
import Header from '../../CaHeader/Header/Header'
import Footer from '../../CaFooter/Footer/Footer'

import HeroBox from './HeroBox/HeroBox';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

function MainPage() {
    return (
    <>
    <BackButton />
        <Header />
        <div className="Main-page">
            <div className="main-content-container">
                <main className="main-content">
                    <HeroBox
                    title="Programuok savo ateitį!®"
                    description="CodeAcademy programavimo kursai – tiesiausias kelias technologinės karjeros link "
                    />

                    <Section1
                    title="CodeAcademy pulsas"
                    description="Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌
                    Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝"
                    />

                    <Section2 />
                </main>
            </div> 
        </div>
        <Footer />
    </>
    );
}
export default MainPage;