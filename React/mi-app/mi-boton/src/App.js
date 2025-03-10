import logo from './Boton.png';
import './App.css';
import { Component } from 'react';
import Toggle from './components/Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
