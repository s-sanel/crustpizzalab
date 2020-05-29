import React from 'react';
import "../styles/footer.css";
import footerLogo from "../images/logo/footer-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img
                src={footerLogo}
                height="100px"
                alt="logo"
            />
            
        </footer>
    )
}

export default Footer
