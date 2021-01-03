import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACi0Rx8MmZYlN9uw9WUWTnDR90d0X0-IE",
    authDomain: "twitter-clone-f89ed.firebaseapp.com",
    databaseURL: "https://twitter-clone-f89ed-default-rtdb.firebaseio.com",
    projectId: "twitter-clone-f89ed",
    storageBucket: "twitter-clone-f89ed.appspot.com",
    messagingSenderId: "930356584318",
    appId: "1:930356584318:web:329c98690dcd0bd4b41d2f",
    measurementId: "G-0YFF6LN3SK"
};

// connect firebase to the backend

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore(); //Access Firebase services

export const auth = firebase.auth();
//export default db; 