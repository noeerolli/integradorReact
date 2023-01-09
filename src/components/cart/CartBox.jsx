import { Badge, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "../cart/cart.css"

export const CartBox = ({products}) => {

    const [counter, setCounter] = useState(0);
    
    const {addProduct} = useContext(CartContext);

    const sumProd = products.price*counter;

    function add(){
        setCounter(counter + 1); 
        
    }

    function remove(){
       counter > 0 && setCounter(counter - 1);
       
    }


    return(
        <div className="cart-box">

            <div style={{justifyContent:"center"}}>
                <div className="text-center" >
                    <button className="rounded-circle bg-warning " style={{justifyContent:"center"}} onClick={remove}> - </button> 
                    <Badge bg="dark"  pill style={{margin:"2px"}}>
                        {counter}
                    </Badge>
                    <button className="rounded-circle "  onClick={add}>+</button>
                </div>
                
                <p style={{marginTop:"1em", fontWeight:"bold"}}>Total: {sumProd} </p>
           </div>

            
           
            <Link to = {'/cart'}>

                <Button variant="dark" onClick={ () =>addProduct(counter, products, sumProd)}>Agregar al carrito</Button>

            </Link>
           
        </div>
    )
}

