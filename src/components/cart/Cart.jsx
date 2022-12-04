import { useState } from "react";
import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "./CartContext";


export const Cart = () =>{

    const {products, addSum} = useContext(CartContext);

 //   const [totalItem, setTotalItem] = useState(0)

 
    
    if(products.length > 0){

        

        return(

          

            <div>
                <div>
                    <h1 style={{color: "white" , textAlign: "center"}}>Carrito</h1>
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
                                <p>Total: {price*numProducts} </p> 
                                </div>
                                
                                <div>
                                    <Button style={{backgroundColor: "black", borderColor: "black"}}><FaTrashAlt/>Eliminar</Button> 
                                </div>

                            </ListGroup.Item>
            

                        </ListGroup>
                    
                    </div>
                    
                )}

{/*
                <div style={{display: "flex", backgroundColor: "white", justifyContent: "center", width:"50%"}}>           
                    <div>    
                         <p style={{color:"black"}}>Total:  </p> 
                    </div>
                                
                    <div>
                        <Button onClick = {() =>addSum(totalItem)} style={{backgroundColor: "black", borderColor: "black"}}>Checkout</Button> 
                    </div>
                </div>
        */}
                {console.log({products})}

            </div>
        )
    }
    else{
        return(
            <>
               <p style={{color: "white"}}>El carrito esta vacío ----- </p> 
            </>
        )
    }
}




//falta total precio por item, total compra
//funcionalidad del boton eliminar

//Si está vacío que muestre algo, puede ser msj "su carrito está vacío"

//seguir comprando??