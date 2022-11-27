import { useContext } from "react";
import { useState } from "react"
import { Badge, ListGroup } from "react-bootstrap"
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
                            <div><FaTrashAlt/>Eliminar</div>
                            
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

//lista de productos posibilidad de aumentar o disminuir cantidad de items
//total producto


//total compra

//seguir comprando