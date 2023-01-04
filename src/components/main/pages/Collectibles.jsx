
import { Container, Row } from "react-bootstrap";
import { firebaseDb } from "../../../firebase/config";
import { collection } from "firebase/firestore/lite";
import { useFetch } from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import '../pages/pages.css';
import { Card } from "./Card";

export const Collectibles = () => {

  const productsDb = collection(firebaseDb, 'productos')

  const { productsData } = useFetch(productsDb)

  let category = productsData.filter((item) => item.category === 'juguete')

  return (


    <Container style={{ marginTop: "8em", marginBottom: "4em" }}>

      <h1 className="title">Coleccionables</h1>

      <Row xs={1} md={2} lg={4} className="g-4">

        {category.map(({ id, name, price, image, currency, description }) => (

          <Link
            key={id}
            to={`/items/${id}`}
          >


            <Card id={id} name={name} price={price} image={image} currency={currency} />

          </Link>
        ))}



      </Row>

    </Container>
  )



}