import { useState } from "react"
import { Button, Form, FormGroup } from "react-bootstrap"

const initialState = {name: "", email: "", message: ""}


export const Contact =()=>{

    const [form, setForm] = useState(initialState)

    const handleInput = (e) => {
        const {name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleClick = (e) =>{
        e.preventDefault()
        console.log(form);
    }


    return(
        <form name="contactForm" className=" col-6 ">

            <input
                name="name"
                value={form.name}
                type="text"
                className="form-control mb-3"
                placeholder="Nombre"
                onChange={handleInput}
            />
           
           <input
                name="email"
                value={form.email}
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                onChange={handleInput}
            />


            <input
                name="message"
                value={form.message}
                type="textarea"
                className="form-control mb-3"
                placeholder="Escriba su mensaje"
                rows ={5}
                onChange={handleInput}

            />


            <button className="btn btn-outline-light"
         
            onClick={handleClick}
            >Enviar</button>



        </form>
    )
}