import React from 'react';
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import MainMenu from './components/MainMenu';
import HomePageCarousel from './components/HomePageCarousel';
import BusinessHours from './components/BusinessHours';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';
import Parallax from './components/Parallax';


const MenuPage = () => (
  <div>
    <h1>Menu page</h1>
  </div>
);

const RestaurantsPage = () => (
  <div>
    <h1>Restaurants page</h1>
  </div>
);

const ContactPage = () => (
  <div>
    <h1>Contact page</h1>
  </div>
);

const Home = () => (
  <div className="App">
    <HomePageCarousel />
    <BusinessHours />
    <ArticlesList />
    {/* <Parallax /> */}
    <Footer />

    {/* <header className="App-header"> */}
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    {/* <p>crust</p> */}
    {/* <Button variant="outline-danger">test</Button> */}
    {/* </header> */}
  </div>
);

function App() {
  return(
    <>
      <MainMenu/>
      <div className="page-wrapper">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/restaurants" exact component={RestaurantsPage} />
        <Route path="/contact" exact component={ContactPage} />
      </Switch>
      </div>
    </>
  )
}

export default App;
