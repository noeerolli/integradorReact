
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
//import { useFetch } from "../../../hooks/useFetch";



export const ItemDetails = () =>{

    //parámetro de la ruta
    const {id} = useParams()

    
    //const{productsDB: item} = useFetch()  ----no funciona

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
        <Container className="d-flex justify-content-center ">
         <Card className="text-center" style={{ width: '18rem' }}>
                
                <Card.Header>Precio: {item.price}</Card.Header>
                <Card.Img variant="top" src={item.image} />
                <Card.Body >
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Card.Text>
                    {item.details}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>{" "} {/*agrega al cart, suma al counte, se muestra en icono*/}
                    <Button variant="primary">Comprar</Button>{" "}  {/* ver si lo saco */ }
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </Container>
    )
}


