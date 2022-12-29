
import { Button, Container, Row } from "react-bootstrap";
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
    
        
    <Container style={{marginTop: "8em", marginBottom: "4em"}}>
        
      <h1 className="title">Coleccionables</h1>

      <Row xs={1} md={2} lg={4} className="g-4">
    
        {category.map(({id,name, price, image, description}) => (

            <Link
                key = {id}
                to = {`/items/${id}`}
            >


              <div className="card" border="warning" style={{height:"550px"}}>
                <div className="card-header flex-center" style={{color:"black"}}>Precio: {price}</div>
                <div style={{display:"flex", justifyContent: "center"}}>
                  <img  className="card-img card-img-product"  src={image} alt={name} />
                </div>
                <div className="card-body flex-center ">
                  <h5 style={{color:"black", fontWeight:"bold"}}>{name}</h5>     
                </div>
                <div className="flex-center" style={{marginBottom:"15px"}}>
                  <Button variant="dark">Ver más</Button>{" "}
                </div>
              </div>

            </Link>
        ))}

        
    
      </Row>
    
    </Container>
  )

    
      
}