
import { Button, Card, CardGroup, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import '../pages/pages.css';


export const Collectibles =()=>{

const{productsDB} = useFetch()

         
  return(

      
    <Container style={{marginTop: "8em"}}>
       
      <h1 className="title">Coleccionables</h1>

      <Row xs={1} sm={2} md={4} >
  
        {productsDB.map(({id,name, price, image, description, details, currency}) => (

        <Link
          key = {id}
          to = {`/items/${id}`}
        >

          <CardGroup  >
            <Card className="text-center" style={{ width: '8em' }}>
                
              <div className="card-header">Precio: {currency} {price}</div>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                <Button variant="dark">Ver más</Button>{" "}
                    
              </Card.Body>
               
            </Card>
          </CardGroup>
        </Link>
          ))}
  
        </Row>
  
     </Container>
    )
      
  }