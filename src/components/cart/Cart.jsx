
import { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import '../cart/cart.css';



export const Cart = () =>{

    const { products, total, removeProduct} = useContext(CartContext);
    
   
    if(products.length > 0){

        

       
        return(

            <div id="detail-container" style={{marginTop: "4em", marginBottom:"4em"}}>
                <div>
                    <h1 className="title">Carrito</h1>
                </div>
                <div>
                    {products.map(({id, name, image, price, numProducts})=>

                    
                    
                        <div style={{marginTop: "1em", marginLeft:"2em", marginRight:"2em"}}  key={id}>
                        
                        
                            <ListGroup as="ul" >

                                <div id="cart-items" className='list-group-item d-flex justify-content-between' 
                                    as="li"  
                                >
                                    <img style={{width: "12em", height:"12em", objectFit:"cover" }} src={image} alt={id}></img>
                                    <div className="cart-detail">
                                        <div className="fw-bold">Product:{name}</div>
                                        <div>Precio: ${price}- Cantidad: {numProducts}</div>
                                        <p className="fw-bold">Total: ${price*numProducts} </p> 
                                    </div>
                                
                                    <div  className="flex-center" style={{display:"flex", alignContent:"center"}}>
                                        <Button className="deleteBtn" onClick={()=>removeProduct(id, numProducts, price)}>Eliminar</Button>
                                            
                                        
                                    </div>
                                  

                                </div>
                

                            </ListGroup>
                        
                        
                        </div>
                        
                    )}

                    <div className="total-purchase-container" >
                        <p className="total-purchase fw-bold">Total: ${total}</p>
                    </div>
                    
                  
                    <div style={{margin: "2em"}}>
                        <Link to={"/checkout"}>
                            <button  className="btn bg-light m-3">Finalizar compra</button>
                        </Link>

                        <Link to="/">
                            <button className="btn bg-warning m-3">Seguir comprando</button>
                        </Link>
                    </div>


                </div>
            </div>
        )
        
    }
    else{
        return(
            <div className="container empty-cart">
                <div className="empty">
                <p style={{color: "black"}}>El carrito se encuentra vacío. <Link to="/" style={{textDecoration:"underline", color:"#F1C40F", backgroundColor:"black", borderRadius:"0.375rem", padding:"6px"}}>Agregar productos</Link> </p> 
                </div>
            </div>
        )
    }
}



