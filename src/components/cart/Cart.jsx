import { useContext } from "react";
import { useState } from "react"
import { Badge, ListGroup } from "react-bootstrap"
import { CartContext } from "./CartContext";

export const Cart = () =>{


    const [counter, setCounter] = useState(0);
    const {addProduct} = useContext(CartContext);


    function add(){
        setCounter(counter + 1);  //restringir de acuerdo al stock en base de datos
    }

    function remove(){
       counter > 0 && setCounter(counter - 1);
    }



    return(
        <div>
            <div>
                <h1 style={{color: "white", textAlign: "center"}}>Carrito</h1>
            </div>
            <div>
                <ListGroup as="ul">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between"
                    >
                     
                        <div className="fw-bold">Product: </div>
                        
                        
                        <div>
                        <button onClick={remove}>-</button> {/*centrar estos botones*/}
                        <Badge bg="primary" pill>
                             {counter}
                        </Badge>
                        <button onClick={add}>+</button>
                        </div>

                        <div>
                            <p>Total:</p>     
                        </div>

                    </ListGroup.Item>

                    
                                         
                    


                </ListGroup>
            </div>
         </div>
    )
}

//lista de productos posibilidad de aumentar o disminuir cantidad de items
//total producto


//total compra

//seguir comprando