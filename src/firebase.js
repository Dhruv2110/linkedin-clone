import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCd3zQnCAft7Nuv2PzAK2D34qQIk0nX5IQ",
    authDomain: "linkedin-clone-bc8ab.firebaseapp.com",
    projectId: "linkedin-clone-bc8ab",
    storageBucket: "linkedin-clone-bc8ab.appspot.com",
    messagingSenderId: "185792101569",
    appId: "1:185792101569:web:4464e22ce63ad9d9546840"
};

const db = firebase.initializeApp(firebaseConfig).firestore();
// const db = firebaseApp.firestore();

export default db;