
import { useState, createContext } from "react";


export const LoginContext = createContext();

export const  LoginProvider = ({children}) =>{

    const [logged, setLogged] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [user, setUser] = useState(undefined)
    const [isRegistered, setIsRegistered] =useState(false)

    
    async function firebaseLogin(user){
        const {displayName, email, uid} = await user;
    }

    function login(){

        setLogged(true);

    }

    function signup(){
        setIsRegistered(!isRegistered) 
    }

    function logout(){
        setLogged(false);
        setUser(undefined);
        error()
    }


    function wait(){
        setWaiting(true);
    }

    function error(){
        setWaiting(false);
    }


    return(
        <LoginContext.Provider value={{logged, isRegistered, waiting, user, 
                                       firebaseLogin, login,error, wait,signup, logout
        }}>
            {children}
        </LoginContext.Provider>


    )



}

