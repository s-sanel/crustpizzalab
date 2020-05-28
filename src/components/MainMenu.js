import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import "../styles/main-menu.css";

const MainMenu = () => {
    return (
        <div className="container" style={{ minHeight: "56px" }}>
            <Navbar
                // bg="light"
                fixed="top"
                expand="lg"
                style={{ backgroundColor: "#FAB500" }}
            >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="d-block d-lg-none p-0 ml-2 mr-auto"
                >
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        style={{
                            border: "1px solid #FDC72C",
                            borderRadius: "50%",
                            backgroundColor: "#E74345"
                        }}
                    />
                </Navbar.Brand>

                <Button variant="danger" className="d-block d-lg-none">
                    ORDER ONLINE
        </Button>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="mr-auto"
                        style={{ width: "100%", justifyContent: "center" }}
                    >
                        <Nav.Link as={Link} to="/">
                            our pizzor
            </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            menus
            </Nav.Link>
                        <Nav.Link as={Link} to="/">
                            contact
            </Nav.Link>
                        <div
                            className="d-none d-lg-block mr-0"
                            style={{ width: "0px" }}
                        ></div>
                        <Nav.Link as={Link} to="/about">
                            work with us
            </Nav.Link>
                        <Nav.Link as={Link} to="/about">
                            restaurants
            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="d-none d-lg-block mr-0"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50px)",
                        backgroundColor: ""
                    }}
                >
                    <img
                        src={logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        style={{
                            // position: "absolute",
                            // top: 0,
                            // left: 0,
                            border: "1px solid #FDC72C",
                            borderRadius: "50%",
                            backgroundColor: "#E74345"
                        }}
                    />
                </Navbar.Brand>
                <Button
                    variant="danger"
                    className="d-none d-lg-block"
                    style={{ position: "absolute", right: "10px" }}
                >
                    ORDER ONLINE
        </Button>
            </Navbar>
        </div>
    )
}

export default MainMenu
