
import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {firebaseAuth} from "../config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async (error) =>{

    try{
        const result = await signInWithPopup(firebaseAuth, googleProvider)
        
        console.log(result.user);

        const {displayName, email, uid} = result.user;

        return{displayName, email, uid};



    }

    catch(err){
        error()
        console.log("Error de autencicación con google:", err)
    }
   


}




