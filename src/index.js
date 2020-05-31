import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
// import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);
