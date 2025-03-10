import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC1wvgFnGjBoIA_rmyYb2lAUofL_pkamuA",
  authDomain: "agenda-react-ded20.firebaseapp.com",
  projectId: "agenda-react-ded20",
  storageBucket: "agenda-react-ded20.firebasestorage.app",
  messagingSenderId: "801423466543",
  appId: "1:801423466543:web:30bf42b0e8e9e9fbabe6da",
  measurementId: "G-49V9XLV0CP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };