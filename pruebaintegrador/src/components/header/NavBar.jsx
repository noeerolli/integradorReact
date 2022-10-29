
import {Button, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import { Logo } from './Logo'


//este componente debería desglosarlo en otros componentes

export const NavBar =()=>{
 // mapear opciones

    return(
        
        <Navbar expand="lg" bg="dark" variant="dark">

            
            <Nav className="me-auto d-flex align-items-center">

                <Logo/>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/collectibles">
                        Coleccionables</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Remeras
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item href="#action/3.4">
                        Ofertas
                    </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="#contacto">Contacto</Nav.Link>
                
            </Nav>
                            

            <Nav >
           
                <Button variant="light mx-2" >Login</Button>
                <Button variant="light mx-2" >Logout</Button>
             
            </Nav>
                            
                        
                
        </Navbar>

    )
}