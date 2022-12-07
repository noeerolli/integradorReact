import { useState, useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../../firebase/providers/providers";
import { LoginContext } from "./LoginContext";
import { SignUp } from "./SignUp";

export const Login = () =>{


    const {firebaseLogin, waiting, wait, error, isRegistered, signup} = useContext(LoginContext);

    const [form, setForm] =useState({name: "", password:""});


    function checkForm(e){
      /*  e.preventDefault();
        wait();
        const user = */
    }

    async function googleSignIn(e){
        e.preventDefault()
        wait()
        const user = await signInWithGoogle(error)
        firebaseLogin(user)
    }



    function handleInput(e){
        const {name, value} = e.target;    // e. target devuelve el elemento que desencadenó el evento
        setForm({...form, [name]:value});
    }


    return isRegistered ? <SignUp signup={signup} waiting = {waiting} handleInput = {handleInput}/> 
            :<Container>
                {console.log(isRegistered)}
                <Form>
                    <h2 style={{color: "white"}}>Login</h2>

                    <p style={{color:"white"}}>No tenés una cuenta <Link to = "/signUp" >Registrate</Link></p> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Nombre" onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" onChange={handleInput} />
                    </Form.Group>
                    
                    <div>
                        <Button variant="light mx-2" onClick={checkForm} >
                            Login
                        </Button>
                        <Button variant="light mx-2" onClick={googleSignIn} disabled={waiting}>
                            Ingresar con Google
                        </Button>
                    </div>
                </Form>
            </Container>

}


