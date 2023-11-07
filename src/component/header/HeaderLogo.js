import React from 'react';
import '../header/Header.css';
import LogoImage from '../images/logo.png';
import { Link } from 'react-router-dom';

function HeaderLogo({ sections }) {
  return (
    <header className="outer">
      <div className="container">
        <div className="inner">
          <div className="left-logo">
            <Link to="/">
              <img src={LogoImage} alt="Logo" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogo;
