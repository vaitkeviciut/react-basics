import './ProgramsPage.css';
import BackButton from '../../../BackButton';
import Header from '../../CaHeader/Header/Header'
import Footer from '../../CaFooter/Footer/Footer'

import ProgramsFilter from './ProgramsFilter/ProgramsFilter';
import ProgramsList from './ProgramsList/ProgramsList';
import Banner from './Banner/Banner'
import Title from '../../CaNewsPage/NewsPage/Title'
import Container from '../../../Container/Container';



function ProgramsPage() {
    return (
    <>
    <BackButton />
        <Header />
        <Container>        
                <Title title="Programos" />

                <Banner
                title="Nežinai ką pasirinkti?"
                text="Spręsk IT testą"
                />

                <div className="main-content-wrapper">

                    <ProgramsFilter
                    title="Rastos 47 programos"
                    theme="Tema"
                    place="Vieta"
                    type="Tipas"
                    time="Laikas"
                    day="Dienomis"
                    night="Vakarais"
                    />

                    <ProgramsList />

                    
                </div>
                
        </Container>
        <Footer />
    </>
    );
}
export default ProgramsPage;