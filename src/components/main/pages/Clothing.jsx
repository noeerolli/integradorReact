import { Button, Card, CardGroup, Container, Row } from "react-bootstrap"
import { collection } from "firebase/firestore/lite"
import { firebaseDb } from "../../../firebase/config"
import { useFetch } from "../../../hooks/useFetch"
import { Link } from "react-router-dom"


export const Clothing =()=>{


const productsDb = collection(firebaseDb, 'productos')


const{productsData} = useFetch(productsDb)



let category = productsData.filter((item)=>item.category === 'indumentaria')




    return(

      <Container style={{marginTop: "8em"}}>
       
        <h1 className="title">Indumentaria</h1>

        <Row xs={2} md={2} className="g-4">
  
        {category.map(({id,name, price, image, description}) => (

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
    
    )
}