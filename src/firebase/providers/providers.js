
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {firebaseAuth} from "../config";


function userProfile(user){
    console.log(user);

        const {displayName, email, uid} = user;
        return{displayName, email, uid};
}


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async (error) =>{

    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        
        console.log(result.user);
 

        return userProfile(result.user);

    }

    catch(err){
        error()
        console.log("Error de autencicación con google:", err)
    }

}

export const emailRegistration = async (mail, pass, error) =>{
    try{
        const result = await createUserWithEmailAndPassword(firebaseAuth, mail, pass)
        
        return userProfile(result.user)
    }
    catch (err){
        error()
        console.log("Error al registrarse:", err)
    }
}


export const emailLogin = async (mail, pass, error) =>{

    try{
        const result = await signInWithEmailAndPassword(firebaseAuth, mail, pass)
        return userProfile(result.user)
    }
    catch (err){
        error()
        console.log("Error al loguearse:", err)
    }
}




