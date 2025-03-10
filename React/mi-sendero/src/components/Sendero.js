import { useState, useEffect } from "react";

export default function Sendero() {
    const [senderos, setSenderos] = useState([]);

    const getSenderos = async () => {
        // Para poder hacer fetch a la API, he tenido que añadir en el archivo package.json:
        // "proxy": "http://172.25.9.219:8090",
        // Y así, en lugar de hacer fetch a http://172.25.9.219:8090/apiSenderos/senderoweb, hago fetch a /apiSenderos/senderoweb
        // de esta forma evitamos problemas de CORS (Cross-Origin Resource Sharing).
        const respuesta = await fetch('/apiSenderos/senderoweb');
        const data = await respuesta.json();
        const newSenderos = data.map(item => ({
            codigo: item.cod_sendero,
            nombre: item.nombre,
            distancia: item.distancia,
            dificultad: item.dificultad,
            nombreMunicipio: item.municipioNombre_municipio
        }));
        setSenderos(newSenderos);
    };

    useEffect(() => {
        getSenderos();
    }, []);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Senderos</h1>
                </div>
            </div>
            <table className="table table-hover text-center align-middle">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Distancia</th>
                        <th>Dificultad</th>
                        <th>Municipio</th>
                    </tr>
                </thead>
                <tbody>
                    {senderos.map((sendero) => (
                        <tr key={sendero.codigo}>
                            <td>{sendero.codigo}</td>
                            <td>{sendero.nombre}</td>
                            <td>{sendero.distancia} Km</td>
                            <td>{sendero.dificultad}</td>
                            <td>{sendero.nombreMunicipio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}