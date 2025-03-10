import { useState, useEffect } from 'react';
import { getContactos, addContacto, updateContacto, deleteContacto } from '../services/firestoreService';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Gestiones() {
    const [contactos, setContactos] = useState([]);
    const [nuevoContacto, setNuevoContacto] = useState({ nombre: "", apellido: "", direccion: "", ciudad: "", codigoPostal: "", fechaNacimiento: "" });
    const [contactoSeleccionado, setContactoSeleccionado] = useState(null)
    const [error, setError] = useState("");


    const validarFormulario = () => {
        const { nombre, apellido, direccion, ciudad, codigoPostal, fechaNacimiento } = nuevoContacto;

        // Verificar que todos los campos están completos
        if (!nombre || !apellido || !direccion || !ciudad || !codigoPostal || !fechaNacimiento) {
            setError("Todos los campos son obligatorios.");
            return false;
        }

        // Validar código postal (5 dígitos numéricos)
        if (!/^\d{5}$/.test(codigoPostal)) {
            setError("El código postal debe ser un número de 5 dígitos.");
            return false;
        }

        // Validar fecha en formato dd/MM/yyyy
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(fechaNacimiento)) {
            setError("La fecha debe tener el formato dd/MM/yyyy.");
            return false;
        }

        setError(""); // Si todo está bien, limpiar errores
        return true;
    };

    const fetchContactos = async () => {
        const contactos = await getContactos();
        setContactos(contactos);
    };

    useEffect(() => {
        fetchContactos();
    }
        , []);

    const handleAddContacto = async () => {
        if (!validarFormulario()) return;
        await addContacto(nuevoContacto);
        setNuevoContacto({ nombre: "", apellido: "", direccion: "", ciudad: "", codigoPostal: "", fechaNacimiento: "" });
        fetchContactos();
    };

    const handleUpdateContacto = async () => {
        if (!contactoSeleccionado) return;
        await updateContacto(contactoSeleccionado.id, contactoSeleccionado);
        setContactoSeleccionado(null);
        fetchContactos();
    };

    const handleDeleteContacto = async () => {
        if (!contactoSeleccionado) return;
        await deleteContacto(contactoSeleccionado.id);
        setContactoSeleccionado(null);
        fetchContactos();
    };

    const handleDeseleccionar = () => {
        setContactoSeleccionado(null);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {/* Columna Izquierda - Lista de Contactos */}
                <div className="col-md-6">
                    <h2>Contactos</h2>
                    <div className="row fw-bold border-bottom pb-0 mb-0">
                        <div className="col-6">
                            <h4 className="mb-0">Nombre</h4>
                        </div>
                        <div className="col-6">
                            <h4 className="mb-0">Apellido</h4>
                        </div>
                    </div>
                    <ul className="list-group">
                        {contactos.length > 0 ? (
                            contactos
                            .sort((a, b) => a.apellido.localeCompare(b.apellido))
                            .map((contacto) => (
                                <li
                                    key={contacto.id}
                                    onClick={() => setContactoSeleccionado(contacto)}
                                    className={`list-group-item ${contactoSeleccionado?.id === contacto.id ? "active" : ""}`}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="row">
                                        <div className="col-6">{contacto.nombre}</div>
                                        <div className="col-6">{contacto.apellido}</div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item text-center">No hay contactos disponibles</li>
                        )}
                    </ul>
                </div>

                {/* Columna Derecha - Detalles del Contacto o Formulario de Añadir */}
                <div className="col-md-6">
                    {contactoSeleccionado ? (
                        <>
                            <h2>Detalles del Contacto</h2>
                            <div className="row mb-2">
                                <label className="col-md-4 fw-bold">Nombre:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={contactoSeleccionado.nombre} onChange={(e) => setContactoSeleccionado({ ...contactoSeleccionado, nombre: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label className="col-md-4 fw-bold">Apellido:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={contactoSeleccionado.apellido} onChange={(e) => setContactoSeleccionado({ ...contactoSeleccionado, apellido: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label className="col-md-4 fw-bold">Dirección:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={contactoSeleccionado.direccion} onChange={(e) => setContactoSeleccionado({ ...contactoSeleccionado, direccion: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label className="col-md-4 fw-bold">Ciudad:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={contactoSeleccionado.ciudad} onChange={(e) => setContactoSeleccionado({ ...contactoSeleccionado, ciudad: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label className="col-md-4 fw-bold">Código Postal:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={contactoSeleccionado.codigoPostal} onChange={(e) => setContactoSeleccionado({ ...contactoSeleccionado, codigoPostal: e.target.value })} />
                                </div>
                            </div>
                            <div className="row mb-2">
                                <label className="col-md-4 fw-bold">Fecha de Nacimiento:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" value={contactoSeleccionado.fechaNacimiento} onChange={(e) => setContactoSeleccionado({ ...contactoSeleccionado, fechaNacimiento: e.target.value })} />
                                </div>
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button className="btn btn-primary" onClick={handleUpdateContacto}>Editar</button>
                                <button className="btn btn-danger" onClick={handleDeleteContacto}>Eliminar</button>
                                <button className="btn btn-success" onClick={handleDeseleccionar}>Añadir</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2>Nuevo Contacto</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <input className="form-control mb-2" type="text" placeholder="Nombre" value={nuevoContacto.nombre} onChange={(e) => setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })} />
                            <input className="form-control mb-2" type="text" placeholder="Apellido" value={nuevoContacto.apellido} onChange={(e) => setNuevoContacto({ ...nuevoContacto, apellido: e.target.value })} />
                            <input className="form-control mb-2" type="text" placeholder="Dirección" value={nuevoContacto.direccion} onChange={(e) => setNuevoContacto({ ...nuevoContacto, direccion: e.target.value })} />
                            <input className="form-control mb-2" type="text" placeholder="Ciudad" value={nuevoContacto.ciudad} onChange={(e) => setNuevoContacto({ ...nuevoContacto, ciudad: e.target.value })} />
                            <input className="form-control mb-2" type="text" placeholder="Código Postal (5 números)" value={nuevoContacto.codigoPostal} onChange={(e) => setNuevoContacto({ ...nuevoContacto, codigoPostal: e.target.value })} />
                            <input className="form-control mb-2" type="text" placeholder="Fecha de Nacimiento (dd/MM/yyyy)" value={nuevoContacto.fechaNacimiento} onChange={(e) => setNuevoContacto({ ...nuevoContacto, fechaNacimiento: e.target.value })} />
                            <button className="btn btn-success w-100" onClick={handleAddContacto}>Añadir</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}