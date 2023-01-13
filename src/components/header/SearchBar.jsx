import { useState } from "react"
import { Button, Form } from "react-bootstrap"



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
            <Button variant="outline-warning" href={`/SearchPage/${searchParam}`}>Buscar</Button>
        </Form>
    )
}