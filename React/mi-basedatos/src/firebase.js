// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSxJOE7wFT89bMf2GFMFnd3fwDQTWt2VM",
  authDomain: "crud-react-d120a.firebaseapp.com",
  projectId: "crud-react-d120a",
  storageBucket: "crud-react-d120a.appspot.com", // <- Corregido
  messagingSenderId: "248065135574",
  appId: "1:248065135574:web:0b5ecd1d03615f40028a77",
  measurementId: "G-D39DN6HDC7"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db };