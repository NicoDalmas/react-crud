import React from 'react';

import logo from './logo.svg';
import './App.css';

import List from "./components/List";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container">
        <img src={logo} className="App-logo" alt="logo" />

    <Route exact path="/" component={List}></Route>
    </div>
    </Router>
  );
}

export default App;
