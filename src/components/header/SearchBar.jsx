import { Button, Form } from "react-bootstrap"


export const SearchBar = () => {



    return (
        <Form className="d-flex p-2">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-warning">Buscar</Button>
        </Form>
    )
}