import { emailRegistration } from "../../firebase/providers/providers";
import { Button, Container, Form } from "react-bootstrap";
import { LoginContext } from "./LoginContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../login/login.css"
import Swal from "sweetalert2";




export const SignUp = () =>{

    const { error, wait, waiting, firebaseLogin, } = useContext(LoginContext);
    const [form, setForm] =useState({email:'', password:''});
  
   
    function checkForm(e){
       
        e.preventDefault();
        wait();
       
        const {email, password} = form;

        
        if (email !== "" && password !== ""){
            const user = emailRegistration(email, password, error);
            firebaseLogin(user); 
            
        }else{
            Swal.fire({
                title: "Error en el registro, revisa los datos proporcionados",
                confirmButtonColor: '#F1C40F',
                
            })
        }

        
    }


    function handleInput(e){
        const {name, value} = e.target;    // e. target devuelve el elemento que desencadenó el evento
        setForm({...form, [name]:value});
       
    }

    return(

        <div className="login-container"  style={{marginTop:"8em"}}>
            <Container>


                <h2 style={{color: "white", marginBottom: "2em"}}>Registro</h2>
                <Form>
                
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Control name="email" type="email" placeholder="Ingrese su Email" onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control  name="password" type="password" placeholder="Contraseña, mínimo 6 caracteres" onChange={handleInput} />
                    </Form.Group>
                    
                    <div className="d-flex flex-center mt-4 mb-4">
                        <Button variant="light" onClick={checkForm} disabled={waiting}>
                            Registrarme
                        </Button>
                        <Link to= "/" className="d-flex-row"><button className="btn bg-warning  m-3 " variant="light">
                            Página principal
                        </button></Link>
                    </div>

                    <p style={{color:"white", marginBottom: "135px"}}>Ya tengo cuenta <Link to = {"/login"} style={{textDecoration:"underline", color:"#F1C40F"}}>Loguearme</Link></p>
                    
                    
                </Form>
            </Container>
            
        </div>

        
    )
}