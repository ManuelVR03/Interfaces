import { useState } from "react";

export default function Semanal() {
    const [dia, setDia] = useState("Lunes")

    return (
        <div>
            <h1>Selecciona un día de la semana</h1>
            <select name="dia" onChange={e => setDia(e.target.value)}>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miércoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sábado">Sábado</option>
                <option value="Domingo">Domingo</option>
            </select>
            <h2>{dia}</h2>
        </div>
    )
}