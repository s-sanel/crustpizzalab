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

const About = () => (
  <div>
    <h1>About page</h1>
    <Link to="/">Home</Link>
  </div>
);

const Home = () => (
  <div className="App">
    
    <HomePageCarousel />
    <BusinessHours />
    <ArticlesList />
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
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </>
  )
}

export default App;
