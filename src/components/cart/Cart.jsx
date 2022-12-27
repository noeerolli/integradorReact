
import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap"

import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import '../cart/cart.css';



export const Cart = () =>{

    const {products} = useContext(CartContext);
 
   
    if(products.length > 0){

       
        return(

          
            <div>
                <div>
                    <h1 className="title">Carrito</h1>
                </div>
              
                {products.map(({id, name, image, price, numProducts})=>
                 
                    <div  style={{margin: "2em"}}  key={id}>
                        <ListGroup as="ul">

                            <ListGroup.Item
                                as="li"
                                className="d-flex justify-content-between"
                                
                            >
                                <img style={{width: "8em"}} src={image} alt={id}></img>
                                <div>
                                    <div className="fw-bold">Product:{name} - Id: {id} </div>
                                    <div>Precio: {price}- Cantidad: {numProducts}</div>
                                    <p>Total: {price*numProducts} </p> 
                                </div>
                                
                                <div style={{display:"flex", alignContent:"center"}}>
                                    <Button className="deleteBtn">Eliminar</Button>
                                        
                                       
                                </div>

                            </ListGroup.Item>
            

                        </ListGroup>
                    
                    </div>
                    
                )}


              
                <div style={{margin: "2em"}}>
                    <Link to={"/checkout"}>
                     <Button variant="light">Checkout</Button>
                    </Link>
                </div>

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





//funcionalidad del boton eliminar


//seguir comprando??