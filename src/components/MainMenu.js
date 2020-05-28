import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "../styles/main-menu.css";
import PizzaIcon from "mdi-react/PizzaIcon";
import MapIcon from "mdi-react/MapIcon";
import EmailIcon from "mdi-react/EmailIcon";
import ChefHatIcon from "mdi-react/ChefHatIcon";
import MapMarkerIcon from "mdi-react/MapMarkerIcon";
import { LinkContainer } from "react-router-bootstrap";

const MainMenu = () => {
    return (

        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="#features">Features</Nav.Link>
        //             <Nav.Link href="#pricing">Pricing</Nav.Link>
                    
        //         </Nav>
                
        //     </Navbar.Collapse>
        // </Navbar>


    //   <div className="container" style={{ minHeight: "56px" }}>
        <Navbar collapseOnSelect fixed="top" expand="lg" className='main-navigation' style={{ backgroundColor: "#FAB500" }}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand as={Link} to="/" className="d-block d-lg-none p-0 ml-2 mr-auto">
            <img src={logo} alt="Crust Pizza Lab logo"
              className="d-inline-block align-top navbar-brand-small-logo" />
          </Navbar.Brand>

          <Button variant="danger" className="d-block d-lg-none">ORDER ONLINE</Button>

          <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
            <Nav className="mr-auto nav-collapse nav-collapse-container">        
                <LinkContainer exact to="/">
                    <Nav.Link><PizzaIcon className="d-block d-lg-none mr-3"/>VÅRA PIZZOR</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/menu">
                    <Nav.Link><MapIcon className="d-block d-lg-none mr-3"/> VÅR meny</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/rest">
                    <Nav.Link><MapMarkerIcon className="d-block d-lg-none mr-3"/> VÅRA RESTAURANGER</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/job">
                    <Nav.Link><ChefHatIcon className="d-block d-lg-none mr-3"/> jobba hos oss</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/contact">
                    <Nav.Link><EmailIcon className="d-block d-lg-none mr-3"/> kontakt</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Brand
            as={Link}
            to="/"
            className="d-none d-lg-block mr-0 navbar-brand-large-logo-container">
            <img src={logo} alt="React Bootstrap logo"
              className="d-inline-block align-top navbar-brand-large-logo"
            />
          </Navbar.Brand>
          <Button variant="danger" className="d-none d-lg-block order-online-btn-large"
            style={{ position: "absolute", right: "10px" }}>
            ORDER ONLINE
          </Button>
        </Navbar>
    //   </div>
    );
}

export default MainMenu
