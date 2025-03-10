import React, { useState } from "react";

function Hijo({ nombre, setNombre }) {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
        </div>
    );
}

function Padre() {
    const [nombre, setNombre] = useState("Juan");

    return (
        <div>
            <h1>Componente Padre</h1>
            <Hijo nombre={nombre} setNombre={setNombre} />
        </div>
    );
}

export default Padre;
