import { LoginContext } from "../login/LoginContext";
import { Login } from "../login/Login";
import { useContext } from "react";




export const CheckoutBox = () =>{

    const {logged} = useContext(LoginContext);
   
  

return logged
    ?
    <div>

        <p style={{color:"white"}}>checkout</p>

    </div>

    : <Login/>
  

}