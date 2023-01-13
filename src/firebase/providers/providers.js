
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {firebaseAuth} from "../config";
import "../../components/login/login.css";
import Swal from "sweetalert2";

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
        console.log("Error de autenticación con google:", err)
    }

}

export const emailRegistration = async (mail, pass, error) =>{
    try{
        const result = await createUserWithEmailAndPassword(firebaseAuth, mail, pass)

        Swal.fire({
            title: "Registro Exitoso!",
            confirmButtonColor: '#F1C40F'
        })
            
        return userProfile(result.user)

        
    }
    catch (err){
        error()
        console.log("Error al registrarse:", err)
        Swal.fire({
            title: "Error en el registro",
            confirmButtonColor: '#F1C40F',
            text: "Asegurate de haber escrito bien tu email - Recordá que la contraseña debe tener como mínimo 6 caracteres"
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
        Swal.fire({
            title: "Error en el logueo",
            confirmButtonColor: '#F1C40F',
            text: "Revisá los datos y volvé a intentarlo"
        })
    }
}




