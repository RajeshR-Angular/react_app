import firebase from 'firebase'
import 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDzxfALTjEwvjBDd9_Kb9Z7HYAkeVNmL0U",
    authDomain: "react-ecom-a03f4.firebaseapp.com",
    databaseURL: "https://react-ecom-a03f4.firebaseio.com",
    projectId: "react-ecom-a03f4",
    storageBucket: "react-ecom-a03f4.appspot.com",
    messagingSenderId: "524413100810",
    appId: "1:524413100810:web:789ac7bef9c852a6aad0f3",
    measurementId: "G-KD75YEKPL2"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;