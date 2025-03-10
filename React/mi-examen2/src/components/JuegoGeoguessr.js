import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default JuegoGeoguessr => {
    let sevilla = ['Écija', 'Carmona', 'Dos Hermanas'];
    let malaga = ['Torremolinos', 'Marbella', 'Fuengirola'];
    let cordoba = ['Lucena', 'Puente Genil', 'Montilla'];
    let provincias = ['Sevilla', 'Málaga', 'Córdoba'];
    let localidadesAux = sevilla.concat(malaga, cordoba);
    const [localidades, setLocalidades] = useState(localidadesAux);
    const [localidad, setLocalidad] = useState('');
    const [toogle, setToogle] = useState(false);
    const [aciertos, setAciertos] = useState(0);
    const [fallos, setFallos] = useState(0);

    useEffect(() => {
        setLocalidades(localidades => localidades.filter(item => item !== localidad));
        if (toogle && localidades.length === 0) {
            setToogle(false);
            alert('Fin del juego\nAciertos: ' + aciertos + '\nFallos: ' + fallos);
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [aciertos, fallos]);

    useEffect(() => {
        console.log(localidades);
        randomLocalidad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [localidades]);

    const jugar = () => {
        setToogle(true);
        randomLocalidad();
    }

    const randomLocalidad = () => {
        let localidad = localidades[Math.floor(Math.random() * localidades.length)];
        setLocalidad(localidad); 
    }

    const adiniva = () => {
        let provincia = document.querySelector('select').value;
        let acierto = false;
        if (sevilla.includes(localidad) && provincia === 'Sevilla') {
            acierto = true;
        } else if (malaga.includes(localidad) && provincia === 'Málaga') {
            acierto = true;
        } else if (cordoba.includes(localidad) && provincia === 'Córdoba') {
            acierto = true;
        }
        if (acierto) {
            setAciertos(aciertos => aciertos + 1);
        } else {
            setFallos(fallos => fallos + 1);
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>JuegoGeoguessr</h1>
                </div>
            </div>
            {toogle && (
                <div className='row'>
                    <div className='col-12'>
                        <h2>Localidad: {localidad}</h2>
                    </div>
                </div>)}
            {toogle && (
                    <div className='row'>
                        <div className='col-12'>
                            <button onClick={adiniva}>Adivina</button>
                        </div>
                    </div>)}
            {toogle && (
                <div className='row'>
                    <div className='col-6'>
                        <h3>Provincia: </h3>
                    </div>
                    <div className='col-6'>
                        <select name='provincia'>
                            {provincias.map((provincia, index) => (
                                <option key={index}>{provincia}</option>
                            ))}
                        </select>
                    </div>
                </div>)}
            {toogle && (
                <div className='row'>
                    <div className='col-12'>
                        <h3>Aciertos: {aciertos}</h3>
                    </div>
                </div>)}
            {toogle && (
                <div className='row'>
                    <div className='col-12'>
                        <h3>Fallos: {fallos}</h3>
                    </div>
                </div>)}
            {!toogle && (
                <div className='row'>
                    <div className='col-12'>
                        <button onClick={jugar}>Empezar</button>
                    </div>
                </div>)}
        </div>
    )
}