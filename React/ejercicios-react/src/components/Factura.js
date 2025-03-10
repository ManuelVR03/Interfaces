import { Component } from "react";

export default class Factura extends Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: 'Martillo',
            precio: 0,
            cantidad: 0,
            total: 0,
            items: []
        };
        this.newCompra = this.newCompra.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { id, value } = e.target;
        this.setState({ [id]: id === "precio" || id === "cantidad" ? Number(value) : value });
    }

    newCompra(e) {
        e.preventDefault();
        const { producto, precio, cantidad, total, items } = this.state;
        if (precio > 0 && cantidad > 0) {
            const nuevoTotal = total + precio * cantidad;
            const nuevoItem = { nombre: producto, precio, cantidad };
            this.setState({
                items: [...items, nuevoItem],
                total: nuevoTotal,
                precio: 0,
                cantidad: 0
            });
        }
    }

    render() {
        return (
            <div>
                <h1>Factura</h1>
                <form>
                    <label htmlFor='producto'>Producto:</label>
                    <select id='producto' value={this.state.producto} onChange={this.handleChange}>
                        <option value='Martillo'>Martillo</option>
                        <option value='Destornillador'>Destornillador</option>
                        <option value='Caladora'>Caladora</option>
                    </select>
                    <br /><br /><br />
                    <label htmlFor='precio'>Precio:</label>
                    <input type='number' id='precio' value={this.state.precio} onChange={this.handleChange} />
                    <br /><br /><br />
                    <label htmlFor='cantidad'>Cantidad:</label>
                    <input type='number' id='cantidad' value={this.state.cantidad} onChange={this.handleChange} />
                    <br /><br /><br />
                    <button onClick={this.newCompra}>Añadir</button>
                </form>
                <h3>Factura</h3>
                <div>
                    {this.state.items.map((item, index) => (
                        <p key={index}>
                            <strong>Producto:</strong> {item.nombre}, <strong>Precio:</strong> {item.precio}€, <strong>Cantidad:</strong> {item.cantidad}
                        </p>
                    ))}
                </div>
                <p><strong>Total:</strong> {this.state.total}€</p>
            </div>
        );
    }
}