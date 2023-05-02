import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase-init';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading,setLoading] = useState(true);
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
    const logout = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,current=>{
            if(current)setUser(current);
            else setUser(null);
            console.log(current);
            setLoading(false);
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
        updateUser,
        loading,
        setLoading,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;