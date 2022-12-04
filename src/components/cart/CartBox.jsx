import { useContext, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

export const CartBox = ({products}) => {

    const [counter, setCounter] = useState(0);
    

    const {addProduct} = useContext(CartContext);
    
    const sumProd = products.price*counter;

    function add(){
        setCounter(counter + 1);  //restringir de acuerdo al stock en base de datos
        
    }

    function remove(){
       counter > 0 && setCounter(counter - 1);
       
    }


    

    return(
        <>
            <div>
                <button onClick={remove}>-</button> {/*centrar estos botones*/}
                <Badge bg="primary" pill>
                {counter}
                </Badge>
                <button onClick={add}>+</button>
            </div>

            <h3>Total: {sumProd} </h3>
           
            <Link to = {'/cart'}>

                   <Button variant="primary" onClick={() =>addProduct(counter, products, sumProd)}>Agregar al carrito</Button>

            </Link>
            {console.log(sumProd)}
        </>
    )
}

//deberían ubicarse un item debajo del otro en el cart al comprar varios pero no está pasando, solo muestra 1