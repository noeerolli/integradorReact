
import { Button, Container, Row } from "react-bootstrap"
import { firebaseDb } from "../../../firebase/config"
import { collection } from "firebase/firestore/lite"
import { useFetch } from "../../../hooks/useFetch"
import { Link } from "react-router-dom"
import { Intro } from "./Intro"
import '../home/home.css'
import { Card } from "../pages/Card"



export const Home = () => {


  const productsDb = collection(firebaseDb, 'productos')


  const { productsData } = useFetch(productsDb)




  return (
    <Container>
      <Intro />

      <div className="home-container">

        <h1 className="title">Nuestros productos</h1>

        <Row xs={1} md={2} lg={4} className="g-2">

          {productsData.map(({ id, name, price, image, currency }) => (

            <Link
              key={id}
              to={`/items/${id}`}
            >


              <Card id={id} name={name} price={price} image={image} currency={currency} />
            </Link>
          ))}

        </Row>

      </div>

    </Container>
  )
}