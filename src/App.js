import React from 'react';
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from './logo.svg';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import MainMenu from './components/MainMenu';
import HomePageCarousel from './components/HomePageCarousel';
import BusinessHours from './components/BusinessHours';
import ArticlesList from './components/ArticlesList';
import Footer from './components/Footer';
import Parallax from './components/Parallax';
import MenuPage from './pages/MenuPage';
import OurPizzaPage from './pages/OurPizzaPage';

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
  <>
    <HomePageCarousel />
    <BusinessHours />
    <ArticlesList />
    {/* <Parallax /> */}
    {/* <Footer /> */}

    {/* <header className="App-header"> */}
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    {/* <p>crust</p> */}
    {/* <Button variant="outline-danger">test</Button> */}
    {/* </header> */}
  </>
);

function App() {
  return (

    <div className="App">
      <MainMenu />
      <div className="page-wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/our-pizza" exact component={OurPizzaPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
