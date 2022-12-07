import { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LoginContext } from "./LoginContext";





export const SignUp = () =>{

    const { waiting, signup, firebaseLogin} = useContext(LoginContext);
    const [form, setForm] =useState({name:"", password:""});


    function checkForm(e){
        e.preventDefault();
        const {name, pass} = form;
        
        if (name !== "" && pass !== ""){

        }
        

    }

    function handleInput(e){
        const {name, value} = e.target;    // e. target devuelve el elemento que desencadenó el evento
        setForm({...form, [name]:value});
    }



    return(

        <Container>
        <Form>
        <h2 style={{color: "white"}}>Registro</h2>

        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Ingrese su Email" onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" onChange={handleInput} />
        </Form.Group>
        
        <div>
            <Button variant="light mx-2" onClick={checkForm} >
                Registrarme
            </Button>

            <p style={{color:"white"}}>Ya tengo cuenta <Link to = {"/login"}>Loguearme</Link></p>
           
        </div>
    </Form>
    </Container>
    )
}