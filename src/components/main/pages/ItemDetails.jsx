
import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartBox } from "../../cart/CartBox";
//import { useFetch } from "../../../hooks/useFetch";



export const ItemDetails = () =>{

    //parámetro de la ruta
    const {id} = useParams()

    
    //const{productsDB: item} = useFetch(id)  

    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch("/productsDB.json") //sin la url no funciona
          .then(response => response.json())
          .then(datos =>{
                setItem(datos.find(product =>product.id===parseInt(id)))
            })
            .then(console.log(id))
    }, [id])

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
                    <CartBox products={item}>                       
                    </CartBox >
                    {/*<Button variant="primary">Agregar al carrito</Button>{" "}*/} {/*agrega al cart, suma al counte, se muestra en icono*/}
                    {/* <Button variant="primary">Comprar</Button>{" "}  */}
                </Card.Body>
               

                
                
            </Card>
        </Container>
    )
}


