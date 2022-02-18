import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    
        apiKey: "AIzaSyBxlNY45ia9yXmmjMaEKd0eIaGAGBurpI4",
        authDomain: "crwn-db-e6cfd.firebaseapp.com",
        projectId: "crwn-db-e6cfd",
        storageBucket: "crwn-db-e6cfd.appspot.com",
        messagingSenderId: "1057779414656",
        appId: "1:1057779414656:web:a4b82aed2f646bfa3ad865",
        measurementId: "G-9Q7C1J636W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;