import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDB1ao7HsSLILWMbnc33Nk5efjqLDLulWo",
    authDomain: "clone-f22cf.firebaseapp.com",
    projectId: "clone-f22cf",
    storageBucket: "clone-f22cf.appspot.com",
    messagingSenderId: "998823043399",
    appId: "1:998823043399:web:531403c37fb36d682a2c62"
});

const auth = app.auth();
export { auth };
export default app;