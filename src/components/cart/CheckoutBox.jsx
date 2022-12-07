import { useContext } from "react";
import { LoginContext } from "../login/LoginContext";
import { SignUp } from "../login/SignUp";



export const CheckoutBox = () =>{

    const {isRegistered} = useContext(LoginContext);
   
  

return isRegistered 
    ?
    <div>

        <p style={{color:"white"}}>checkout</p>

    </div>

    : <SignUp />

}