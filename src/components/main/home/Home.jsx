
import { Button, Card, CardGroup, Container, Row } from "react-bootstrap"
import { Intro } from "./Intro"
import { firebaseDb } from "../../../firebase/config"
import { Link } from "react-router-dom"
import { collection } from "firebase/firestore/lite"
import { useFetch } from "../../../hooks/useFetch"




export const Home = () =>{


  const productsDb = collection(firebaseDb, 'productos')


  const{productsData} = useFetch(productsDb)




    return(
      <Container>
        <Intro />

        <Container style={{marginTop: "8em"}}>
       
       <h1 className="title">Nuestros productos</h1>
 
       <Row xs={2} md={2} className="g-4">
   
         {productsData.map(({id,name, price, image, description, details}) => (
 
         <Link
           key = {id}
           to = {`/items/${id}`}
         >
 
           <CardGroup>
             <Card border="warning" className="text-center" style={{ width: '8em' }}>
                 
               <div className="card-header">Precio: {price}</div>
               <Card.Img variant="top" src={image} />
               <div className="card-body">
                 <Card.Title>{name}</Card.Title>
                 <Card.Text>
                   {description}
                 </Card.Text>
                 <Button variant="dark">Ver más</Button>{" "}
                     
               </div>
                
             </Card>
           </CardGroup>
         </Link>
           ))}
   
         </Row>
   
      </Container>



        
      </Container>  
    )
}