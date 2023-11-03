import React from 'react';
import '../header/Header.css';
import LogoImage from '../images/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

function Header({ sections }) {
  return (
    <header className="outer">
      <div className="container">
        <div className="inner">
          <div className="left-logo">
            <Link to="/">
              <img src={LogoImage} alt="Logo" />
            </Link>
          </div>
          <div className="navigation">
            <ul>
              {sections.map((section, index) => (
                <li key={index}>
                  <ScrollLink
                    to={section.id}
                    spy={true}
                    smooth={true}
                    duration={500} 
                  >
                    {section.title}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="navigation-toggle-button">
          <button>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
