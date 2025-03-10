import { useState } from "react";

export default function Dado () {
    const [dado, setDado] = useState(1)

    const tirarDado = () => {
        let tirada = Math.floor(Math.random() * 6) + 1;
        setDado(tirada)
    }

    return (
        <div>
            <h1>Dado</h1>
            <h2>{dado}</h2>
            <button onClick={tirarDado}>Tirar dado</button>
        </div>
    );
}