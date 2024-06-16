import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut ,GoogleAuthProvider} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export    const AuthContext=createContext(null)
const ProviderContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
    const provider=new GoogleAuthProvider();
    //Create user with email and password
    const CreateUser=(email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //sign in with email and password
    const SignIn=(email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    //sign out 
    const LogOut=()=>{
        setLoader(true);
        return signOut(auth);
    }
    //sign in with google
    const SignInGoogle=()=>{
        setLoader(true);
        return signInWithPopup(auth,provider);
    }
    //observing state change
    useEffect(()=>{
        const Unsubscribe=onAuthStateChanged(auth,CurrentUser=>{
            setUser(CurrentUser);
            setLoader(false);
        })
        return()=>{
            Unsubscribe();
        }
    },[]);
    const AuthInfo={
        user,
        CreateUser,
        SignIn,
        LogOut,
        SignInGoogle,
        loader
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    ); 
};
ProviderContext.propTypes={
    children:PropTypes.node
}
export default ProviderContext;