
import { useState, createContext } from "react";


export const LoginContext = createContext();

export const  LoginProvider = ({children}) =>{

    const [logged, setLogged] = useState(false);
    const [waiting, setWaiting] = useState(false);
    //const [user, setUser] = useState(undefined)
    const [register, setRegister] =useState(false)


    const user = {name:"admin" , pass: "admin"}
     

    function login(name, pass){

         name == user.name && pass == user.pass && setLogged(true);

    }

    //function logout(){
    //    setLogged(false);
    //    setUser(undefined);
    //    error()
    //}


    function wait(){
        setWaiting(true);
    }

    function error(){
        setWaiting(false);
    }


    return(
        <LoginContext.Provider value={{logged, register, waiting, login,
        error, user, wait
        //signup, logout
        }}>
            {children}
        </LoginContext.Provider>


    )



}

