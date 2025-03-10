import { useState } from "react";

export default function Factura () {
    const [producto, setProducto] = useState("Martillo");
    const [precio, setPrecio] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);

    const newCompra = (e) => {
        e.preventDefault();
        if (precio > 0 && cantidad > 0) {
            const nuevoTotal = total + precio * cantidad;
            const nuevoItem = { producto, precio, cantidad };
            setItems([...items,nuevoItem])
            setTotal(nuevoTotal)
            setPrecio(0)
            setCantidad(0)
        }
    };

    return (
        <div>
            <h1>Factura</h1>
            <form>
                <label htmlFor='producto'>Producto:</label>
                <select id='producto' onChange={e => setProducto(e.target.value)}>
                    <option value='Martillo'>Martillo</option>
                    <option value='Destornillador'>Destornillador</option>
                    <option value='Caladora'>Caladora</option>
                </select>
                <br /><br /><br />
                <label htmlFor='precio'>Precio:</label>
                <input type='number' id='precio' value={precio} onChange={e => setPrecio(Number(e.target.value))} />
                <br /><br /><br />
                <label htmlFor='cantidad'>Cantidad:</label>
                <input type='number' id='cantidad' value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
                <br /><br /><br />
                <button onClick={newCompra}>Añadir</button>
            </form>
            <h3>Factura</h3>
            <div>
                {items.map((item, index) => (
                    <p key={index}>
                        <strong>Producto:</strong> {item.producto}, <strong>Precio:</strong> {item.precio}€, <strong>Cantidad:</strong> {item.cantidad}
                    </p>
                ))}
            </div>
            <p><strong>Total:</strong> {total}€</p>
        </div>
    );
}