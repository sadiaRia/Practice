import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './pages/Header'
import Home from './pages/Home'

class App extends Component {
  render(){    
  return (
    <React.Fragment>

    <div className="App">
        <Header/>
        <Home/>
    </div> 
    </React.Fragment>
  );
}
}

export default App;
