
import { useState, createContext } from "react";


export const LoginContext = createContext();

export const  LoginProvider = ({children}) =>{

    const [logged, setLogged] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [user, setUser] = useState(undefined)
   

    
    async function firebaseLogin(user){
        console.log(user)
        const { displayName, email, uid} = await user;
        
        if (email && uid){
            debugger
            login()
            setUser ({
                displayName,
                email,
                uid
                
            })
            
        }
        console.log(user)
        
    }

    function login(){

        setLogged(true);
        console.log("ingresaste correctamente")

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
        <LoginContext.Provider value={{logged,  waiting, user, 
                                       firebaseLogin, login,error, wait, logout
        }}>
            {children}
        </LoginContext.Provider>


    )



}

