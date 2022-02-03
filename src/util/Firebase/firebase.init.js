import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializaFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializaFirebase;