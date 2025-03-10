import { Component } from "react";

export default class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div>
                <h1>Inputs</h1>
                <input
                    type="text"
                    name="texto"
                    onChange={this.handleChange}
                    value={this.state.texto}
                    placeholder="Texto 1"
                />
                <input
                    type="text"
                    name="texto"
                    onChange={this.handleChange}
                    value={this.state.texto}
                    placeholder="Texto 2"
                />
            </div>
        );
    }
}