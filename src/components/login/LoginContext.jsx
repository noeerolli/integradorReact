
import { useState, createContext } from "react";



export const LoginContext = createContext();

export const  LoginProvider = ({children}) =>{

    const [isLogged, setIsLogged] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [user, setUser] = useState(undefined)
   

    
    async function firebaseLogin(user){
        console.log(user)
        const { displayName, email, uid} = await user;
        
        if (email && uid){
            
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

        setIsLogged(true);
        console.log("ingresaste correctamente")

    }

    function logout(){
        setIsLogged(false);
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
        <LoginContext.Provider value={{isLogged,  waiting, user, 
                                       firebaseLogin, login,error, wait, logout
        }}>
            {children}
        </LoginContext.Provider>


    )



}

