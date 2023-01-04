import { Container, Row } from "react-bootstrap"
import { collection } from "firebase/firestore/lite"
import { firebaseDb } from "../../../firebase/config"
import { useFetch } from "../../../hooks/useFetch"
import { Link } from "react-router-dom"
import { Card } from "./Card"


export const Clothing =()=>{


const productsDb = collection(firebaseDb, 'productos')


const{productsData} = useFetch(productsDb)



let category = productsData.filter((item)=>item.category === 'indumentaria')




    return(

      <Container style={{marginTop: "8em", marginBottom: "4em"}}>
       
        <h1 className="title">Indumentaria</h1>

        <Row xs={1} md={2} lg={4} className="g-4">
  
        {category.map(({id,name, price, image, currency}) => (

        <Link
          key = {id}
          to = {`/items/${id}`}
        >

              <Card id={id} name={name} price={price} image={image} currency={currency} />

        
        </Link>
          ))}
  
        </Row>
  
     </Container>
    
    )
}