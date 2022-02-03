import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializaFirebase from "../util/Firebase/firebase.init";

initializaFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }

    // SignIn with email & password
    const registerWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user.email);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // logout
    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });
    }

    // ovserver
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });

        return () => unsubscribe;
    }, [])
    return {
        signInWithGoogle,
        user,
        registerWithEmailPassword,
        logout,
    }
};

export default useFirebase;