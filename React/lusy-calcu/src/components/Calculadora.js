import "bootstrap/dist/css/bootstrap.min.css";
import {Component} from 'react';

export default class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = {
      botones: [
        ["1", "2", "3", "/"],
        ["4", "5", "6", "*"],
        ["7", "8", "9", "-"],
        [".", "0", "=", "+"]
      ]
    };
  }


  render() {
    return (
      <div className="container w-50 mx-auto mt-5 border shadow bg-dark p-4 rounded">
        <div className="row">
          <div className="col-12">
            <h1 className="display-3 bg-light">Calculadora</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3 offset-9">
            <button className="btn btn-danger">C</button>
          </div>
        </div>
        {this.state.botones.map((fila, i) => (
          <div key={i} className="row">
            {fila.map((boton, j) => (
              <div key={j} className="col-3">
                <button className="btn btn-light w-100">{boton}</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
