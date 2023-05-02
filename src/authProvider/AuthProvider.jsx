import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase-init';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUser = ({name,photo}) =>{
        return updateProfile(auth.currentUser,{displayName: name, photoURL: photo});
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,current=>{
            if(current)setUser(current);
            console.log(current);
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        auth,
        user,
        setUser,
        createUser,
        loginUser,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;