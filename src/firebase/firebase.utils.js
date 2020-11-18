import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {firebase as firebaseConfig} from '../configs/configs'

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const getCurrentUser = () => {
    return new Promise((resolve, reject)=>{
        const unsubscribe = auth.onAuthStateChanged((user)=>{
            unsubscribe();
            resolve(user);
        }, reject)
    })
}


export default firebase;