
import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap"
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from "./CartContext";


export const Cart = () =>{

    const {products} = useContext(CartContext);

   

 
    
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





//funcionalidad del boton eliminar


//seguir comprando??