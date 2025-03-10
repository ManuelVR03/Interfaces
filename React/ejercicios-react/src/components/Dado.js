import { Component } from "react";

export default class Dado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
        };
    }

    tirarDado = () => {
        this.setState({
            numero: Math.floor(Math.random() * 6) + 1,
        });
    };

    render() {
        return (
            <div>
                <h1>Dado</h1>
                <h2>{this.state.numero}</h2>
                <button onClick={this.tirarDado}>Tirar dado</button>
            </div>
        );
    }
}