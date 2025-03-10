import React, { Component } from "react";

export default class Sumador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0
    };
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: Number(event.target.value) });
  };

  handleSum = () => {
    alert(this.state.num1 + this.state.num2);
  };

  render() {
    return (
      <div>
        <h1>Sumador</h1>
        <input
          type="number"
          name="num1"
          onChange={this.handleChange}
          placeholder="Número 1"
        />
        <input
          type="number"
          name="num2"
          onChange={this.handleChange}
          placeholder="Número 2"
        />
        <button onClick={this.handleSum}>Sumar</button>
      </div>
    );
  }
}
