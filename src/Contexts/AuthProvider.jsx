import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ( {children} ) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


    //user register
    const createUser = (name, email, photo, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //user login
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    //user login with google
    const userGoogleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //user signout
    const userSignOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            //console.log('current user in onAuthStateChanged', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        userLogin,
        userGoogleLogin,
        userSignOut
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;