import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa";

import { CartContext } from "./CartContext";

export const Cart = () =>{

    const {products} = useContext(CartContext);


    return(
        <div>
            <div>
                <h1 style={{color: "white", textAlign: "center"}}>Carrito</h1>
            </div>

            {products.map(({id, name, image, price, numProducts})=>
                <div>
                    <ListGroup as="ul" key={id}>

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between"
                        >
                            <img style={{width: "4em"}} src={image} alt={id}></img>
                            <div>
                            <div className="fw-bold">Product:{name} - Id: {id} </div>
                            <div>Precio: {price}- Cantidad: {numProducts}</div>
                            </div>
                            <Button style={{backgroundColor: "black", borderColor: "black"}}><FaTrashAlt/>Eliminar</Button>
                            
                            <div>
                                <p>Total: {price}</p>     
                            </div>

                        </ListGroup.Item>


                    </ListGroup>
                
                </div>
            )}

         </div>
    )
}




//falta total precio por item, total compra
//funcionalidad del boton eliminar

//Si está vacío que muestre algo, puede ser msj "su carrito está vacío"

//seguir comprando??