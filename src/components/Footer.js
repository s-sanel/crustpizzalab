import React from 'react';
import "../styles/footer.css";
import logo from "../logo.svg";

const Footer = () => {
    return (
        <div className="footer">
            <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                style={{
                    border: "1px solid #FDC72C",
                    borderRadius: "50%",
                    backgroundColor: "#E74345"
                }}
            />
            
        </div>
    )
}

export default Footer
