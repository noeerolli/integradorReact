//import { Button, Card, CardGroup } from "react-bootstrap"
//import {id, price, image, name} from "./Collectibles"

import { useEffect, useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";



export const ItemDetails = () =>{

    const {id} = useParams()

    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/productsDB.json") //ver por q ncesito ponerle lla url y no funciona solo con el json
          .then(response => response.json())
          .then(datos =>{
                setItem(datos.find(product =>product.id===parseInt(id)))
            })
            .then(console.log(item))
    }, [])

    return(
        <>
         <Card className="text-center" style={{ width: '18rem' }}>
                
                <Card.Header>Precio: {item.price}</Card.Header>
                <Card.Img variant="top" src={item.image} />
                <Card.Body >
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>{" "}
                    <Button variant="primary">Comprar</Button>{" "}
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </>
    )
}


/* 
export const ItemDetails = () =>{
    return(
        <>
        <CardGroup>
            <Card className="text-center" style={{ width: '18rem' }}>
                
                <Card.Header>Precio: {price}</Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    Descripción producto
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>{" "}
                    <Button variant="primary">Comprar</Button>{" "}
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            </CardGroup>
        </>
    )
}
*/