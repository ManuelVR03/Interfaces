import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [toogle, setToogle] = useState(false);
    const [control, setControl] = useState(null);

    useEffect(() => {
        if (segundos === 59) {
            setSegundos(0);
            setMinutos(minutos => minutos + 1);
        }
    }, [segundos]);

    useEffect(() => {
        if (minutos === 59) {
            setMinutos(0);
            setHoras(horas => horas + 1);
        }
    }, [minutos]);

    const comenzar = () => {
        setToogle(true);
        setControl(setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000))
    }

    const detener = () => {
        setToogle(false);
        clearInterval(control);
    }

    const reset = () => {
        detener();
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
    }

    return (
        <div className="container">
            <h1>Cronómetro con Hooks</h1>
            <div className="row">
                <div className="col-4 offset-4">
                    <div className="card">
                        <div className="card-body">
                            {<h2>{horas < 10 ? '0' + horas : horas}:{minutos < 10 ? '0' + minutos : minutos}:{segundos < 10 ? '0' + segundos : segundos}</h2>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    {!toogle && <button className="btn btn-primary" onClick={comenzar}>Iniciar</button>}
                    {toogle && <button className="btn btn-danger" onClick={detener}>Detener</button>}
                    <button className="btn btn-warning" onClick={reset}>Reiniciar</button>
                </div>
            </div>
        </div>
    );
    
}