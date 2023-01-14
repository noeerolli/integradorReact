import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"



export const SearchBar = () => {

    const [searchParam, setSearchParam] = useState("")


    const handleChange = (e) => {
        e.preventDefault()
        setSearchParam(e.target.value)


    }


    return (
        <Form className="d-flex p-2" >
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchParam}
                onChange={handleChange}

            />
            <Link
                key={searchParam}
                to={`/SearchPage/${searchParam}`}
            >

                <Button type="button" variant="outline-warning" >Buscar</Button>
            </Link>
        </Form>
    )
}