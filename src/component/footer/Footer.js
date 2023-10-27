import React from "react";
import '../footer/Footer.css'
import FooterLogo from '../images/footer-logo.png'
import { Link } from 'react-router-dom';

function Footer({ companyName, currentYear, rightsText }){
    return (
        <footer className="outer">
            <div className="container">
                <div className="inner">
                    <div className="logo"><Link to="/"><img src={FooterLogo} alt="Footer Logo" /></Link></div>
                    <div className="btm-cont">{companyName} © {currentYear}. {rightsText}</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
