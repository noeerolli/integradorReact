
import { Button, Container, Row } from "react-bootstrap"
import { firebaseDb } from "../../../firebase/config"
import { collection } from "firebase/firestore/lite"
import { useFetch } from "../../../hooks/useFetch"
import { Link } from "react-router-dom"
import { Intro } from "./Intro"
import '../home/home.css'



export const Home = () =>{


  const productsDb = collection(firebaseDb, 'productos')


  const{productsData} = useFetch(productsDb)




    return(
      <Container>
        <Intro />

        <div className="home-container">
       
          <h1 className="title">Nuestros productos</h1>
 
          <Row xs={1} md={2} lg={4} className="g-2">
   
            {productsData.map(({id,name, price, image}) => (
  
              <Link
              key = {id}
              to = {`/items/${id}`}
                >
    

                <div className="card" style={{height:"450px"}}>
                  <div className="card-header flex-center"  style={{color:"black"}}>Precio: {price}</div>
                  <div style={{display:"flex", justifyContent: "center"}}><img  className="card-img card-img-clothing"  src={image} alt={name} /></div>
                  <div className="card-body flex-center">
                    <h5 style={{color:"black", fontWeight:"bold"}}>{name}</h5>    
                  </div>
                  <div className="flex-center" style={{marginBottom:"3px"}}>
                    <Button  variant="dark">Ver más</Button>{" "} 
                  </div>
                </div>
              </Link>
            ))}
   
          </Row>
   
        </div>

      </Container>  
    )
}