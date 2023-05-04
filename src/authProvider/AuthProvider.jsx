import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase-init';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider);
    }
    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider);
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
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        setUser,
        createUser,
        loginUser,
        updateUser,
        loading,
        setLoading,
        logout,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;