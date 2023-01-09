
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {firebaseAuth} from "../config";
import swal from "sweetalert";
import "../../components/login/login.css";

function userProfile(user){


        const {displayName, email, uid} = user;
        return{displayName, email, uid};
}


const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async (error) =>{

    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        
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
        swal({
            title: "Error en el registro",
            text: "Asegurate de haber escrito bien el mail - Recordá que la contraseñe debe tener como mínimo 6 caracteres",
        })

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
        swal({
            title: "Error en el logueo",
            text: "Revisá los datos y volvé a intentarlo",
        })
    }
}




