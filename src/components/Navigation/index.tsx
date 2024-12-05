import { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoV from '../../assets/images/logo-v.png';
import SunLight from '../../assets/images/sun-light.svg';
import MoonDark from '../../assets/images/moon-dark.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../../App';

const Navigation = () => {
    const { setTheme, theme } = useContext(ThemeContext)
    const [modeImg, setModeImg] = useState(SunLight)

    const toggleTheme = () => {
        if (theme === 'light-mode') {
            setTheme?.('dark-mode')
            setModeImg(SunLight)
        } else {
            setTheme?.('light-mode')
            setModeImg(MoonDark);
        }
    }

    return (
        <div className="nav-bar">
            <Link to="/" className="logo-container">
                <img className="logo gelatine" src={LogoV} alt="App logo" />
            </Link>
            <nav className='nav-links'>
                <NavLink
                    className="nav-link"
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} className="nav-icon" />
                    <span className="nav-text">Home</span>
                </NavLink>
                <NavLink
                    className="nav-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} className="nav-icon" />
                    <span className="nav-text">About</span>
                </NavLink>
                <NavLink
                    className="nav-link"
                    to="/bakery"
                >
                    <FontAwesomeIcon icon={faStore} className="nav-icon" />
                    <span className="nav-text">Bakery</span>
                </NavLink>
            </nav>
            <div className="profile-icons">
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/vartikag-1309/"
                    rel="noreferrer"
                    className="social-link"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    target="_blank"
                    href="https://github.com/vartikag13"
                    rel="noreferrer"
                    className="social-link"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                | <img className="theme-icon" src={modeImg} alt="Dark mode button" onClick={toggleTheme}/>

            </div>
        </div>
    );
};

export default Navigation;
