//import './App.css';
//import React, { Component } from 'react';
import CounterClase from './components/CounterClase';
import CounterClaseFuncionFlecha from './components/CounterClaseFuncionFlecha';
import CounterHook from './components/CounterHook';
import CounterHookFuncion from './components/CounterHookFuncion';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="container mt-4">
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Distintas maneras de hacer lo mismo</h1>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='col-6'>
          <h2>Counter Clase</h2>
        </div>
        <div className='col-6'>
          <CounterClase />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <h2>Counter Clase Función Flecha</h2>
        </div>
        <div className='col-6'>
          <CounterClaseFuncionFlecha />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <h2>Counter Hook</h2>
        </div>
        <div className='col-6'>
          <CounterHook />
        </div>
      </div>
      <div className='row'>
        <div className='col-6'>
          <h2>Counter Hook Función Flecha</h2>
        </div>
        <div className='col-6'>
          <CounterHookFuncion />
        </div>
      </div>
    </div>
  );
}

/*

class App extends Component {

  render() {
    return (
      <div className="container">
        <CounterClase />
        <CounterClaseFuncionFlecha />
        <CounterHook />
      </div>
    );
  }
}

export default App;

*/



