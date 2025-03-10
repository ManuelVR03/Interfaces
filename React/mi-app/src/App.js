import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponent';
import { Component } from 'react';
import InputComponent from './components/InputComponent';

class App extends Component {
  constructor(){
    super()
    this.state={
      name: 'Manuel'
    }
  }
  changeName=(event)=>{
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <img src='https://www.svgrepo.com/show/446905/peugeot.svg' className="App-logo" alt="logo" />
          <HelloComponent nombre={this.state.name}></HelloComponent>
          <InputComponent nombre={this.state.name} cambiarNombre={this.changeName}></InputComponent>
        </header>
      </div>
    );
  }
  
}

export default App;
