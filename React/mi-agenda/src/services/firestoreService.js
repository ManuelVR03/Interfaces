import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const getContactos = async () => {
    const querySnapshot = await getDocs(collection(db, "contactos"));
    const contactos = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return contactos;
}

export const addContacto = async (contacto) => {
    await addDoc(collection(db, "contactos"), contacto);
}

export const updateContacto = async (id, contacto) => {
    const contactRef = doc(db, "contactos", id);
    await updateDoc(contactRef, contacto);
};

export const deleteContacto = async (id) => {
    const contactRef = doc(db, "contactos", id);
    await deleteDoc(contactRef);
};
