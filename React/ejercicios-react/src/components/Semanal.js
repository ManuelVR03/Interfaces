import { Component } from "react";

export default class Semanal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dia: "Lunes",
        };
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ dia: value });
    };

    render() {
        return (
            <div>
                <h1>Selecciona un día de la semana</h1>
                <select name="dia" onChange={this.handleChange}>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miércoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </select>
                <h2>{this.state.dia}</h2>
            </div>
        );
    }
}