
import { Button, Card, CardGroup, Container, Row } from "react-bootstrap";
import { firebaseDb } from "../../../firebase/config";
import { collection } from "firebase/firestore/lite";
import { useFetch } from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import '../pages/pages.css';

export const Collectibles =()=>{

  const productsDb = collection(firebaseDb, 'productos')

  const{productsData} = useFetch(productsDb)

  let category = productsData.filter((item)=>item.category === 'juguete')      

  return(
    
        
    <Container style={{marginTop: "8em"}}>
        
      <h1 className="title">Coleccionables</h1>

      <Row xs={2} md={2} className="g-4">
    
        {category.map(({id,name, price, image, description, details}) => (

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