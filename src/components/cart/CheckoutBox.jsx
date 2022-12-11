import { LoginContext } from "../login/LoginContext";
import { Login } from "../login/Login";
import { useContext } from "react";




export const CheckoutBox = () =>{

    const {isLogged} = useContext(LoginContext);
   
  

return isLogged
    ?
    <div>

        <p style={{color:"white"}}>checkout</p>

    </div>

    : <Login/>
  

}