import { Badge, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { CiCircleMinus, CiCirclePlus  } from "react-icons/ci"
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
                    <Button  variant="outline-none" style={{justifyContent:"center"}} onClick={remove}> 
                    <CiCircleMinus style={{ color:"Red" , fontSize: '230%' }}/>
                     </Button> 
                    <Badge bg="dark"  pill style={{margin:"2px"}}>
                        {counter}
                    </Badge>
                    <Button variant="outline-none"  onClick={add}>
                    <CiCirclePlus style={{ color:"black" , fontSize: '230%' }}/>
                    </Button>
                </div>
                
                <p style={{marginTop:"1em", fontWeight:"bold"}}>Total: {products.currency} {sumProd} </p>
           </div>

            
           
            <Link to = {'/cart'}>

                <Button variant="dark" onClick={ () =>addProduct(counter, products, sumProd)}>Agregar al carrito</Button>

            </Link>
           
        </div>
    )
}

