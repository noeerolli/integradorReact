import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartBox } from "../../cart/CartBox";
//import { useFetch } from "../../../hooks/useFetch";



export const componentedeprueba = () =>{

    const {id} = useParams();
    

    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch("/productsDB.json") //sin la url no funciona
          .then(response => response.json())
          .then(datos =>{
                setItem(datos.find(product =>product.id===parseInt(id)))
            })
            
    }, [id])

    return(

        <div style={{display:"flex"}}>
         {console.log(id)}
        <h1 className="title" style={{marginTop:"2em", marginBottom: "2em"}}>Detalles del producto</h1>
        <Card style={{ width: '18rem' }}>
        <div>
        <Card.Img variant="top" src="holder.js/100px180" />
        </div>
        
        
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>


        </div>
    )
}

