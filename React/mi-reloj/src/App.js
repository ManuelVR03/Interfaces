import logo from './logo.svg';
import './App.css';
import Reloj from './components/ComponenteReloj';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://svgsilh.com/svg_v2/1083479.svg' className="App-logo" alt="logo" />
          <Reloj />
        </header>
      </div>
    );
  }
}

export default App;
