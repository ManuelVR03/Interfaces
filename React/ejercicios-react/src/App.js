import './App.css';
import React, { Component } from 'react';
import Sumador from './components/Sumador';
import Semanal from './components/Semanal';
import Inputs from './components/Inputs';
import Factura from './components/Factura';
import Dado from './components/Dado';
import Juego from './components/Juego';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Sumador />
        <Semanal />
        <Inputs />
        <Factura />
        <Dado />
        <Juego />
      </div>
    );
  }
}

export default App;
