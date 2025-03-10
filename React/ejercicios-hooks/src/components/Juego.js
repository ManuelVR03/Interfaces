import { Component } from "react";

export default class Juego extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadoresArray: [],
      parcial: [],
      media: [],
      tiradaActual: 0,
      turnoActual: 0
    };
    
    this.jugar = this.jugar.bind(this);
    this.tiradas = this.tiradas.bind(this);
  }

  jugar() {
    let numJugadores = Number(prompt('Introduce el número de jugadores'));
    let jugadoresArray = [];
    let parcial = new Array(numJugadores).fill(0);
    let media = new Array(numJugadores).fill(0);

    for (let i = 0; i < numJugadores; i++) {
      let nombre = prompt('Introduce el nombre del jugador ' + (i + 1));
      jugadoresArray.push([nombre]);
    }

    this.setState({
      jugadoresArray,
      parcial,
      media,
      tiradaActual: 0,
      turnoActual: 0
    });
  }

  tiradas() {
    let { jugadoresArray, parcial, media, tiradaActual, turnoActual } = this.state;
    
    if (tiradaActual < 5) {
      let dado = Math.floor(Math.random() * 6) + 1;
      jugadoresArray[turnoActual].push(dado);
      parcial[turnoActual] += dado;
      media[turnoActual] = parcial[turnoActual] / (tiradaActual + 1);

      let nuevoTurno = turnoActual + 1;
      let nuevaTirada = tiradaActual;
      if (nuevoTurno >= jugadoresArray.length) {
        nuevoTurno = 0;
        nuevaTirada += 1;
      }
      
      this.setState({
        jugadoresArray,
        parcial,
        media,
        tiradaActual: nuevaTirada,
        turnoActual: nuevoTurno
      });
    } else {
      alert("Ya se han realizado las 5 tiradas.");
    }
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h1>Juego de dados</h1>
        
        <button onClick={this.jugar}>Comenzar</button>

        {this.state.jugadoresArray.length > 0 && (
          <button onClick={this.tiradas} style={{ marginLeft: "10px" }}>
            Tirar dado
          </button>
        )}

        {this.state.jugadoresArray.map((jugador, index) => {
          const nombre = jugador[0];
          const tiradas = jugador.slice(1);

          return (
            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
              <h3>Jugador: {nombre}</h3>
              <p>
                <strong>Tiradas:</strong>{" "}
                {tiradas.length > 0 ? tiradas.join(", ") : "Ninguna"}
              </p>
              <p>
                <strong>Suma Parcial:</strong> {this.state.parcial[index]}
              </p>
              <p>
                <strong>Media:</strong>{" "}
                {this.state.media[index].toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
