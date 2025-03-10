import React, { useState } from "react";

function Hijo({ contador, incrementar }) {
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

function Padre() {
    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <h1>Componente Padre</h1>
            <Hijo contador={contador} incrementar={incrementar} />
        </div>
    );
}

export default Padre;
