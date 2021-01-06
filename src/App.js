import React, { Component } from 'react';
import Madlibs from './Components/MadlibsComponent.js';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Madlibs />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
