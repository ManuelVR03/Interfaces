import { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Geoguessr() {

    const [aleatoria, setAleatoria] = useState("")
    const [jugando, setJugando] = useState(false)
    const [localidades, setLocalidades] = useState(['Écija', 'Dos Hermanas', 'Carmona', 'Marbella', 'Fuengirola', 'Torremolinos', 'Lucena', 'Puente Genil', 'Montilla'])
    const [aciertos, setAciertos] = useState(0)
    const [fallos, setFallos] = useState(0)
    let sevilla = ['Écija', 'Dos Hermanas', 'Carmona']
    let malaga = ['Marbella', 'Fuengirola', 'Torremolinos']
    let cordoba = ['Lucena', 'Puente Genil', 'Montilla']


    const comenzarJuego = () => {
        setJugando(true)
        setAleatoria(aleatoria => localidades[Math.floor(Math.random() * localidades.length)])
    }

    useEffect(() => {
        if (aleatoria !== "")
            setLocalidades(localidades => localidades.filter(localidad => localidad !== aleatoria))
    }, [aleatoria])

    const comprueba = () => {
        let select = document.querySelector("select").value
        if ((sevilla.includes(aleatoria) && select === "sevilla") || (malaga.includes(aleatoria) && select === "malaga") || (cordoba.includes(aleatoria) && select === "cordoba")) {
            setAciertos(aciertos + 1)
        }
        else {
            setFallos(fallos + 1)
        }
    }

    useEffect(() => {
        if (localidades.length === 0){
            setJugando(false)
            alert(`Has acertado ${aciertos} veces y has fallado ${fallos} veces`)
            setAciertos(0)
            setFallos(0)
            setLocalidades(['Écija', 'Dos Hermanas', 'Carmona', 'Marbella', 'Fuengirola', 'Torremolinos', 'Lucena', 'Puente Genil', 'Montilla'])
        }
        else if (jugando)
            setAleatoria(aleatoria => localidades[Math.floor(Math.random() * localidades.length)])
    }
    , [aciertos, fallos])

    return (
        <div className="container mt-5">
            <div className="row mt-3">
                <div className="col-12">
                    <h1>Geoguessr</h1>
                </div>
            </div>
            {!jugando && 
            <div className="row mt-4">
                <div className="col-3 offset-3">
                    <h3>Pulsa para jugar!</h3>
                </div>
                <div className="col-2">
                    <button className="btn btn-success" onClick={comenzarJuego}>Empezar</button>
                </div>
            </div>
            }
            {jugando &&
            <>
            <div className="row mt-4">
                <div className="col-2 offset-4">
                    <h3>Localidad:</h3>    
                </div>
                <div className="col-2">
                    <h3>{aleatoria}</h3>
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
                    <button className="btn btn-warning" onClick={comprueba}>Comprobar</button>
                </div>
            </div>
            </>}
        </div>
    );
}