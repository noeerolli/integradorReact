import { collection } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { firebaseDb } from "../../../firebase/config";
import { useFetch } from "../../../hooks/useFetch";
import { Card } from "./Card";



export const SearchPage = () => {

    const productsDb = collection(firebaseDb, 'productos')

    const { searchParam } = useParams();
    const [searchResult, setSearchResult] = useState([])


    const { productsData } = useFetch(productsDb)

    useEffect(() => {
        let arrayOfItems = []
        let probando = productsData.filter((item) => {


            if (item.name.toLowerCase().includes(searchParam.toLowerCase())) {
                arrayOfItems.push(item)
            }

        }
        )

        setSearchResult(arrayOfItems)

    }, [productsData, searchParam]);



    return (

        <Container style={{ marginTop: "8em", marginBottom: "4em" }}>

            <h1 className="title">Resultados par la busqueda: {searchParam} </h1>

            <Row xs={1} md={2} lg={4} className="g-4">

                {searchResult != ""
                    ? searchResult.map(({ id, name, price, image, detail, currency, description }) => (

                        <Link
                            key={id}
                            to={`/items/${id}`}
                        >


                            <Card id={id} name={name} price={price} image={image} currency={currency} />

                        </Link>
                    ))
                    : <h2 className="title">No se encontraron resultados</h2>

                }


            </Row>

        </Container>
    )




}