import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Calculadora from './components/Calculadora';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculadora />
      </div>
    );
  }
}

export default App;
