import React from 'react';
import "../styles/footer.css";
import footerLogo from "../images/logo/footer-logo.png";
import FacebookIcon from "mdi-react/FacebookIcon";
import InstagramIcon from "mdi-react/InstagramIcon";

const Footer = () => {
    return (
      <footer className="footer row m-0">
        <div className="col-sm">
            <div className="mb-3">
                <img src={footerLogo} height="100px" alt="logo" />
            </div>
            <div className="footer-address mb-3">Stora Nygatan 44, 211 37 Malmö</div>
            <div className="footer-business-hours">Mån - Fre: 11:00-21:00</div>
            <div className="footer-business-hours mb-4">Lör - Sön: 12:00-21:00</div>
            <div className="footer-hashtag mb-1">#CRUSTPIZZALAB</div>
            <div className="footer-social-icons">
                <button href="#" className="footer-social-icon-btn p-1 mx-2">
                    <FacebookIcon className="footer-social-icon" />
                </button>
                <button href="#" className="footer-social-icon-btn p-1 mx-2">
                    <InstagramIcon className="footer-social-icon" />
                </button>
            </div>

            <ul className="footer-menu my-4">
                <li className="footer-menu-item p-1 mx-2"><a href="#">KONTAKT</a></li>
                <li className="footer-menu-item p-1 mx-2"><a href="#">JOBBA HOS OSS</a></li>
                <li className="footer-menu-item p-1 mx-2"><a href="#">VÅRA RESTAURANGER</a></li>
                <li className="footer-menu-item p-1 mx-2"><a href="#">VÅRA PIZZOR</a></li>
                <li className="footer-menu-item p-1 mx-2"><a href="./meny/meny.pdf" target="_blank" style={{ textDecoration: 'none' }}>VÅR MENY</a></li>
            </ul>

        </div>
        <div className="col-sm m-0 p-0">
            <div className="footer-copy py-3">CRUST PIZZA LAB © 2020</div>
        </div>
      </footer>
    );
}

export default Footer
