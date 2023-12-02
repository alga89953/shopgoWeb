// Importa solo las funciones que necesitas de Firebase, junto con tus servicios necesarios
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import "firebase/firestore"
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Descomentar si usas Firestore
// import { getStorage } from 'firebase/storage'; // Descomentar si usas Firebase Storage

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBgUUZqYZPdvQ2CNE-xbIPdN0AKTqb_qss",
    authDomain: "shopgo-2dfc6.firebaseapp.com",
    databaseURL: "https://shopgo-2dfc6-default-rtdb.firebaseio.com",
    projectId: "shopgo-2dfc6",
    storageBucket: "shopgo-2dfc6.appspot.com",
    messagingSenderId: "658853456442",
    appId: "1:658853456442:web:2b9aa63c264a71ae62e303",
    measurementId: "G-6Q8X5QYQJH"
  
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa los servicios de Firebase
const auth = getAuth(app);
const db = getFirestore(app); // Descomentar si usas Firestore
// const storage = getStorage(app); // Descomentar si usas Firebase Storage

// Exporta solo los servicios que necesitas
export { auth, app };
 export { db }; // Descomentar si exportas Firestore
// export { storage }; // Descomentar si exportas Firebase Storage
