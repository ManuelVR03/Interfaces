import { useState } from "react";

export default function Inputs () {
    const [texto, setTexto] = useState("");

    return (
        <div>
            <h1>Inputs</h1>
            <input
                type="text"
                name="texto"
                onChange={e => setTexto(e.target.value)}
                value={texto}
                placeholder="Texto 1"
            />
            <input
                type="text"
                name="texto"
                onChange={e => setTexto(e.target.value)}
                value={texto}
                placeholder="Texto 2"
            />
        </div>
    );
}
