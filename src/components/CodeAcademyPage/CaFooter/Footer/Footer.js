import './Footer.css';
import logoFooter from '../../../images/codeacademy-white.svg';
import footerimg from '../../../images/sertika.svg';
import instagram from '../../../SocialMediaIcons/instagram.svg';
import facebook from '../../../SocialMediaIcons/facebook.svg';
import linkedin from '../../../SocialMediaIcons/linkedin.svg';

function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-1">
                        <div className="footer-image-wrapper">
                            <img className="footer-logo" src={logoFooter} alt="code academy logo" width="130"/>
                        </div>
                        <div className="footer-main-part-wrapper">
                            <div className="lists">
                                <ul className="footer-list-1">
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Studentams</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Karjeros centras</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Programos</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Nemokamos studijos</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">UŽT kursai</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Programavimo kalbos</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Apie mus</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Naujienos</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Karjera - We are hiring!</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Verslui</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">ES parama</a></li>
                                    <li className="footer-list-item"><a className="footer-list-link" href="./#">Kontaktai</a></li>
                                </ul>
                                <div className="footer-list-div">
                                    <span className="city">Vilnius</span>
                                    <ul className="footer-list-2">
                                        <li className="footer-list-item"><a className="footer-list-link" href="./#">Saulėtekio al. 15, Vilnius</a></li>
                                        <li className="footer-list-item"><a className="footer-list-link" href="./#">Antakalnio g. 17, Vilnius</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="icons-wrapper">
                                <a className="instagram-link" href="./#">
                                   <img className="footer-media-icon" src={instagram} alt="instagram" />
                                </a>
                                <a className="facebook-link" href="./#">
                                    <img className="footer-media-icon" src={facebook} alt="facebook" />
                                </a>
                                <a className="linkedin-link" href="./#">
                                    <img className="footer-media-icon" src={linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="footer-2">
                        <div className="footer-bottom-1">
                            <span className="footer-bottom-line">© By UAB Programuok | CodeAcademy šeimos narys – <a className="kids-link" href="./#">CodeAcademy Kids</a></span>
                            <img className="sertika logo" src={footerimg} alt="sertika logo" width="100"/>
                        </div>
                        <div className="footer-bottom-2">
                            <span className="footer-list-item"><a className="footer-list-link" href="./#">Privatumo politika</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer