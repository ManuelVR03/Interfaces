import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CronometroClase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            segundos: 0,
            minutos: 0,
            horas: 0,
            toogle: false,
            control: null
        }
        this.comenzar = this.comenzar.bind(this);
        this.detener = this.detener.bind(this);
        this.reset = this.reset.bind(this);
    }

    comenzar() {
        this.setState({ toogle: true });
        let reloj = setInterval(() => {
            this.setState({ segundos: this.state.segundos + 1 });
            console.log(this.state.segundos);
            if (this.state.segundos === 59) {
                this.setState({ segundos: 0 });
                this.setState({ minutos: this.state.minutos + 1 });
            }
            console.log(this.state.minutos);
            if (this.state.minutos === 59) {
                this.setState({ minutos: 0 });
                this.setState({ horas: this.state.horas + 1 });
            }
        }, 1000);
        this.setState({ control: reloj });
    }

    detener() {
        this.setState({ toogle: false });
        clearInterval(this.state.control);
    }

    reset() {
        this.detener();
        this.setState({ segundos: 0, minutos: 0, horas: 0 });
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>Cronómetro con Clase</h1>
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <h2>{this.state.horas < 10 ? '0' + this.state.horas : this.state.horas}:{this.state.minutos < 10 ? '0' + this.state.minutos : this.state.minutos}:{this.state.segundos < 10 ? '0' + this.state.segundos : this.state.segundos}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        {!this.state.toogle && <button className="btn btn-primary" onClick={this.comenzar}>Iniciar</button>}
                        {this.state.toogle && <button className="btn btn-danger" onClick={this.detener}>Detener</button>}
                        <button className="btn btn-warning" onClick={this.reset}>Reiniciar</button>
                    </div>
                </div>
            </div>
        );
    }
}
