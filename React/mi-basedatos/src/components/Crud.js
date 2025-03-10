import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const CrudApp = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ contacto: '', telefono: 0 });
  const [editingId, setEditingId] = useState(null);

  // Obtener usuarios al cargar
  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para obtener usuarios
  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "agenda"));
      const usersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    } catch (error) {
      console.error("Error al obtener usuarios: ", error);
    }
  };

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Agregar nuevo usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.contacto || !form.telefono) return;

    try {
      if (editingId) {
        // Actualizar usuario existente
        const userRef = doc(db, "agenda", editingId);
        await updateDoc(userRef, form);
        setEditingId(null);
      } else {
        // Agregar nuevo usuario
        await addDoc(collection(db, "agenda"), form);
      }
      setForm({ contacto: '', telefono: 0 });
      fetchUsers();
    } catch (error) {
      console.error("Error al guardar usuario: ", error);
    }
  };

  // Editar usuario
  const handleEdit = (user) => {
    setForm({ contacto: user.contacto, telefono: user.telefono });
    setEditingId(user.id);
  };

  // Eliminar usuario
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este usuario?");
    if (!confirmDelete) return;
    try {
      await deleteDoc(doc(db, "agenda", id));
      fetchUsers();
    } catch (error) {
      console.error("Error al eliminar usuario: ", error);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">CRUD de Usuarios con Firebase</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            name="contacto"
            value={form.contacto}
            onChange={handleChange}
            placeholder="Nombre"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Teléfono"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">{editingId ? "Actualizar" : "Agregar"}</button>
      </form>

      {/* Lista de usuarios */}
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{user.contacto}</strong> - {user.telefono}
            </div>
            <div>
              <button className="btn btn-warning me-2" onClick={() => handleEdit(user)}>✏️ Editar</button>
              <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>🗑️ Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;