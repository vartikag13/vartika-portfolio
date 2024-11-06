import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoV from '../../assets/images/logo-v.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-bar">
      <Link to="/" className="logo-container">
        <img className="logo" src={LogoV} alt="App logo" />
      </Link>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faHome} className="nav-icon" />
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faUser} className="nav-icon" />
          <span className="nav-text">About</span>
        </NavLink>
        <NavLink className="nav-link" to="/bakery" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faStore} className="nav-icon" />
          <span className="nav-text">Bakery</span>
        </NavLink>
        <NavLink className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>
          <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
          <span className="nav-text">Contact</span>
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
      </div>
    </div>
  );
};

export default Navigation;