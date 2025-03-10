import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Geoguessr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aleatoria: "",
            jugando: false,
            localidades: ['Écija', 'Dos Hermanas', 'Carmona', 'Marbella', 'Fuengirola', 'Torremolinos', 'Lucena', 'Puente Genil', 'Montilla'],
            aciertos: 0,
            fallos: 0
        };
        this.sevilla = ['Écija', 'Dos Hermanas', 'Carmona'];
        this.malaga = ['Marbella', 'Fuengirola', 'Torremolinos'];
        this.cordoba = ['Lucena', 'Puente Genil', 'Montilla'];
    }

    comenzarJuego = () => {
        this.setState({
            jugando: true,
            aleatoria: this.state.localidades[Math.floor(Math.random() * this.state.localidades.length)]
        });
    };

    componentDidUpdate() {
        if (this.state.aleatoria !== "" && this.state.localidades.includes(this.state.aleatoria)) {
            this.setState({
                localidades: this.state.localidades.filter(localidad => localidad !== this.state.aleatoria)
            });
        }
        
        if (this.state.localidades.length === 0) {
            alert(`Has acertado ${this.state.aciertos} veces y has fallado ${this.state.fallos} veces`);
            this.setState({
                jugando: false,
                aciertos: 0,
                fallos: 0,
                localidades: ['Écija', 'Dos Hermanas', 'Carmona', 'Marbella', 'Fuengirola', 'Torremolinos', 'Lucena', 'Puente Genil', 'Montilla']
            });
        } else if (this.state.jugando) {
            this.setState({
                aleatoria: this.state.localidades[Math.floor(Math.random() * this.state.localidades.length)]
            });
        }
    }

    comprueba = () => {
        const select = document.querySelector("select").value;
        if ((this.sevilla.includes(this.state.aleatoria) && select === "sevilla") ||
            (this.malaga.includes(this.state.aleatoria) && select === "malaga") ||
            (this.cordoba.includes(this.state.aleatoria) && select === "cordoba")) {
            this.setState({ aciertos: this.state.aciertos + 1 });
        } else {
            this.setState({ fallos: this.state.fallos + 1 });
        }
    };

    render() {
        return (
            <div className="container mt-5">
                <div className="row mt-3">
                    <div className="col-12">
                        <h1>Geoguessr</h1>
                    </div>
                </div>
                {!this.state.jugando && 
                    <div className="row mt-4">
                        <div className="col-3 offset-3">
                            <h3>Pulsa para jugar!</h3>
                        </div>
                        <div className="col-2">
                            <button className="btn btn-success" onClick={this.comenzarJuego}>Empezar</button>
                        </div>
                    </div>
                }
                {this.state.jugando &&
                    <>
                        <div className="row mt-4">
                            <div className="col-2 offset-4">
                                <h3>Localidad:</h3>    
                            </div>
                            <div className="col-2">
                                <h3>{this.state.aleatoria}</h3>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6 offset-3">
                                <h3>¿A qué ciudad pertenece?</h3>    
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6 offset-3">
                                <select className="form-select">
                                    <option value="sevilla">Sevilla</option>
                                    <option value="malaga">Málaga</option>
                                    <option value="cordoba">Córdoba</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4 offset-4">
                                <button className="btn btn-warning" onClick={this.comprueba}>Comprobar</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default Geoguessr;
