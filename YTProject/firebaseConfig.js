// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQgn5lPAhBDUxRGKqXn4ye60_OYOJlVdY",
  authDomain: "sezarblueproject.firebaseapp.com",
  projectId: "sezarblueproject",
  storageBucket: "sezarblueproject.appspot.com",
  messagingSenderId: "568437537232",
  appId: "1:568437537232:web:dc356f0f5a62ac9e52e1d5",
  measurementId: "G-XDW1RJMBCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore con la instancia de la app Firebase
const db = getFirestore(app);

// Exporta la configuración para usarla en otras partes de tu aplicación
export { db };