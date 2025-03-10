import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Calculadora extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: "0",
            operando1: "",
            operando2: "",
            operacion: ""
        };
    }

    borrarTodo = () => {
        this.setState({
            texto: "0",
            operando1: "",
            operando2: "",
            operacion: "",
        });
    };

    borrarOperando = () => {
        if (this.state.operacion === "") {
            this.setState({ operando1: "", texto: "0" });
        } else {
            this.setState({ operando2: "", texto: this.state.operando1 });
        }
    };

    botonPulsado = (valor) => {
        let { operando1, operando2, operacion } = this.state;

        if (!isNaN(valor) || valor === ".") {
            if (operacion === "") {
                operando1 += valor;
                this.setState({ operando1, texto: operando1 });
            } else {
                operando2 += valor;
                this.setState({ operando2, texto: operando2 });
            }
        } else {
            if (operando1 !== "" && operando2 === "") {
                this.setState({ operacion: valor, texto: valor });
            }
        }
    };

    calculaResultado = () => {
        let { operando1, operando2, operacion } = this.state;
        let resultado = 0;

        if (operando1 !== "" && operando2 !== "" && operacion !== "") {
            switch (operacion) {
                case "+":
                    resultado = parseFloat(operando1) + parseFloat(operando2);
                    break;
                case "-":
                    resultado = parseFloat(operando1) - parseFloat(operando2);
                    break;
                case "X":
                    resultado = parseFloat(operando1) * parseFloat(operando2);
                    break;
                case "/":
                    resultado = parseFloat(operando2) !== 0 ? parseFloat(operando1) / parseFloat(operando2) : "Error";
                    break;
                default:
                    break;
            }
            this.setState({ texto: resultado.toString(), operando1: resultado.toString(), operando2: "", operacion: "" });
        }
    };


    render() {
        return (
            <div className="container w-50 mx-auto mt-5 p-4 border rounded shadow bg-dark">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-3 bg-light rounded p-3 text-end">
                            {this.state.texto}
                        </h1>
                    </div>
                </div>
                <div className="row mt-3 g-2">
                    <div className="col-3 offset-6">
                        <button className="btn btn-danger btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.borrarTodo()}>C</button>
                    </div>
                    <div className="col-3">
                        <button className="btn btn-danger btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.borrarOperando()}>CE</button>
                    </div>
                </div>
                <div className="row mt-2 g-2">
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("1")}>1</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("2")}>2</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("3")}>3</button></div>
                    <div className="col-3"><button className="btn btn-primary btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("/")}>/</button></div>
                </div>
                <div className="row mt-2 g-2">
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("4")}>4</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("5")}>5</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("6")}>6</button></div>
                    <div className="col-3"><button className="btn btn-primary btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("X")}>X</button></div>
                </div>
                <div className="row mt-2 g-2">
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("7")}>7</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("8")}>8</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("9")}>9</button></div>
                    <div className="col-3"><button className="btn btn-primary btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("-")}>-</button></div>
                </div>
                <div className="row mt-2 g-2">
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado(".")}>.</button></div>
                    <div className="col-3"><button className="btn btn-light btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("0")}>0</button></div>
                    <div className="col-3"><button className="btn btn-success btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.calculaResultado()}>=</button></div>
                    <div className="col-3"><button className="btn btn-primary btn-lg w-100 fs-4 fw-bold py-3" onClick={() => this.botonPulsado("+")}>+</button></div>
                </div>
            </div>
        );        
    }

}