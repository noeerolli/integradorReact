import { Badge, ListGroup } from "react-bootstrap"

export const Cart = () =>{
    return(
        <div>
            <div>
                <h1 style={{color: "white", textAlign: "center"}}>Carrito</h1>
            </div>
            <div>
                <ListGroup as="ul" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Product: </div>
                        
                        </div>
                        <div>
                        <button>-</button>
                        <Badge bg="primary" pill>
                            14 {/* agregar el counter*/}
                        </Badge>
                        </div>
                        <button>+</button>
                        <div>
                            <p>Total</p>     
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