import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgUUZqYZPdvQ2CNE-xbIPdN0AKTqb_qss",
  authDomain: "shopgo-2dfc6.firebaseapp.com",
  projectId: "shopgo-2dfc6",
  storageBucket: "shopgo-2dfc6.appspot.com",
  messagingSenderId: "658853456442",
  appId: "1:658853456442:web:2b9aa63c264a71ae62e303",
  measurementId: "G-6Q8X5QYQJH"
};

firebase.initializeApp(firebaseConfig);

export{
    firebase
}
