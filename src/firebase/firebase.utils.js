import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSmosRb1VUJOkbt8mLboHaHTSP8UajwDw",
    authDomain: "react-shop-f9758.firebaseapp.com",
    databaseURL: "https://react-shop-f9758.firebaseio.com",
    projectId: "react-shop-f9758",
    storageBucket: "react-shop-f9758.appspot.com",
    messagingSenderId: "886361763239",
    appId: "1:886361763239:web:214d20ed132db877f11a82"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;