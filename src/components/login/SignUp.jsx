import { emailRegistration } from "../../firebase/providers/providers";
import { Button, Container, Form } from "react-bootstrap";
import { LoginContext } from "./LoginContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../login/login.css"




export const SignUp = () =>{

    const { waiting, firebaseLogin} = useContext(LoginContext);
    const [form, setForm] =useState({email:'', password:''});
   
    
   
    function checkForm(e){
      
        e.preventDefault();
        const {email, password} = form;

        
        if (email !== "" && password !== ""){
            const user = emailRegistration(email, password);
            firebaseLogin(user)
            
            
        }
        

    }

    function handleInput(e){
        const {name, value} = e.target;    // e. target devuelve el elemento que desencadenó el evento
        setForm({...form, [name]:value});
    }



    return(

        <div className="login-container"  style={{marginTop:"8em"}}>
            <Container>

                <h2 style={{color: "white", marginBottom: "1em"}}>Registro</h2>
                <Form>
                
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Ingrese su Email" onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control  name="password" type="password" placeholder="Contraseña minimo 8 carateres" onChange={handleInput} />
                    </Form.Group>
                    
                    
                        <Button variant="light" onClick={checkForm} disabled={waiting} >
                            Registrarme
                        </Button>

                        <p style={{color:"white"}}>Ya tengo cuenta <Link to = {"/login"} style={{textDecoration:"underline", color:"#F1C40F"}}>Loguearme</Link></p>
                    
                    
                </Form>
            </Container>
            
        </div>

        
    )
}