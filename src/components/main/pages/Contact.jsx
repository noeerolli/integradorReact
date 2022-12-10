import { useState } from "react"



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

        <div>

            <h1 className="title">Contacto</h1>
        
            <form name="contactForm" className="contact">

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


                <textarea
                    name="message"
                    value={form.message}
                    type="textarea"
                    className="textarea"
                    placeholder="Escriba su mensaje"
                    rows ={5}
                    cols={5}
                    onChange={handleInput}
                    

                />


                <button className="btn btn-outline-light"
            
                onClick={handleClick}
                >Enviar</button>



            </form>
        </div>
    )
}