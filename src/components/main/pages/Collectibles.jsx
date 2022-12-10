
import { Button, Card, CardGroup, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import '../pages/pages.css';


export const Collectibles =()=>{

const{productsDB} = useFetch()

         
  return(

      
    <Container>
       
      <h1 className="title">Coleccionables</h1>

      <Row xs={1} md={2} className="g-4">
  
        {productsDB.map(({id,name, price, image, description, details}) => (

        <Link
          key = {id}
          to = {`/items/${id}`}
        >

          <CardGroup>
            <Card className="text-center" style={{ width: '8rem' }}>
                
              <Card.Header>Precio: {price}</Card.Header>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button variant="primary">Ver más</Button>{" "}
                    
              </Card.Body>
               
            </Card>
          </CardGroup>
        </Link>
          ))}
  
        </Row>
  
     </Container>
    )
      
  }