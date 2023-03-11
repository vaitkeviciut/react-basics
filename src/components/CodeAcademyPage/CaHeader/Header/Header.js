import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Ca-header">
            <div className="header-container-main">
                <div className="header-sticky">
                    <div className="header-container">
                        <header className="main-header">
                            <div className="image-wrapper">
                                <Link to='/codeacademy'><img className="logo" src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg" alt="code academy logo"/></Link>
                            </div>
                
                            <nav className="main-navigation">
                                <ul className="main-menu">
                                    <li className="nav-menu-item"><a className="menu-link" href="./#">Studentams</a></li>
                                    <li className="nav-menu-item"><Link className="menu-link" to="/codeacademy/programs">Programos</Link></li>
                                    <li className="nav-menu-item"><a className="menu-link"  href="./#">Karjeros centras</a></li>
                                    <li className="nav-menu-item"><a className="menu-link" href="./#">IT testas</a></li>
                                    <li className="nav-menu-item"><a className="menu-link" href="./#">Apie mus</a></li>
                                    <li className="nav-menu-item"><Link className="menu-link" to="/codeacademy/news">Naujienos</Link></li>
                                    <li className="nav-menu-item"><a className="menu-link" href="./#">Verslui</a></li>
                                    <li className="nav-menu-item"><a className="menu-link" href="./#">Kontaktai</a></li>
                                    <li className="nav-menu-item"><a className="menu-link" href="./#">EN</a></li>
                                    <li className="nav-menu-item"><a className="button-skambinti" href="tel:+37063409771">SKAMBINTI</a></li>
                                </ul>
                            </nav> 
                        </header>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;