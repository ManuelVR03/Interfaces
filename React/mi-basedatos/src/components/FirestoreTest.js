// src/components/FirestoreTest.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const FirestoreTest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "agenda"));
        const usersList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersList);
        console.log("Usuarios obtenidos:", usersList);
      } catch (error) {
        console.error("Error al obtener documentos: ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Usuarios desde Firestore:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.contacto} - {user.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirestoreTest;
