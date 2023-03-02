import './Section2.css'

import Section2Item from './Section2Item/Section2Item'

import image from '../../images/Artboard1.jpg';

function Section2() {
    return (
        <section className="main-content-2-container">
            <img src={image} width="845px" alt='people'/>
            <Section2Item
            title="Jei galiu aš - gali ir tu!"
            description="Kas sieja buvusį pareigūną, o dabar pensininką Kęstutį, operos solistą Algirdą ir buvusią statybų inžinierę Rugilę?"
            button="Išgirsk istorijas!"
            />
        </section>
    )
}
export default Section2;