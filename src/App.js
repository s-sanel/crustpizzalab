import React from 'react';
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";

const About = () => (
  <div>
    <h1>About page</h1>
    <Link to="/">Home</Link>
  </div>
);

const Home = () => (
  <div className="App">
    <div className="container" style={{ minHeight: "56px" }}>
      <Navbar
        // bg="light"
        fixed="top"
        expand="lg"
        style={{ backgroundColor: "#FAB500" }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Brand as={Link} to="/" className="d-block d-lg-none p-0 ml-2 mr-auto">
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
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
            {/* <Navbar.Brand
              as={Link}
              to="/"
              className="d-none d-lg-block mr-0"
              style={{
                position: "relative",
                width: "100px",
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
                  position: "absolute",
                  top: 0,
                  left: 0,
                  border: "1px solid #FDC72C",
                  borderRadius: "50%",
                  backgroundColor: "#E74345"
                }}
              />
            </Navbar.Brand> */}
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

    <Carousel className="test">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300?text=Second slide&bg=282c34"
          alt="second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x300?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

    <div className="row m-0" style={{ minHeight: "150px" }}>
      <div className="col-sm">one</div>
    </div>

    <div style={{ backgroundColor: "#FAB500" }}>
      <div className="row m-0" style={{ minHeight: "150px" }}>
        <div
          className="col-sm ml-0 order-sm-12"
          style={{
            backgroundColor: "beige",
            minHeight: "150px"
          }}
        >
          <h1>slika</h1>
        </div>
        <div className="col-sm mr-0 order-sm-1" style={{ minHeight: "150px" }}>
          <h1>text</h1>
        </div>
      </div>

      <div className="row m-0" style={{ minHeight: "150px" }}>
        <div
          className="col-sm mr-0"
          style={{
            backgroundColor: "beige",
            minHeight: "150px"
          }}
        >
          <h1>slika</h1>
        </div>
        <div className="col-sm ml-0" style={{ minHeight: "150px" }}>
          <h1>text</h1>
        </div>
      </div>

      <div className="row m-0" style={{ minHeight: "150px" }}>
        <div
          className="col-sm ml-0 order-sm-12"
          style={{
            backgroundColor: "beige",
            minHeight: "150px"
          }}
        >
          <h1>slika</h1>
        </div>
        <div className="col-sm mr-0 order-sm-1" style={{ minHeight: "150px" }}>
          <h1>text</h1>
        </div>
      </div>
    </div>

    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>crust</p>
      <Button variant="outline-danger">test</Button>
    </header>
  </div>
);

function App() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </Switch>
  )
}

export default App;
