
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import { Logo } from './Logo'


export const NavBar =()=>{
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         
                    
            <Nav className="me-auto">

            <Logo/>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
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

            <Nav.Link href="#sale">Ofertas</Nav.Link>
            
            </Nav>
                            

            <Nav>
                <Button variant="outline-secondary">Login</Button>{' '}
                <Button variant="outline-secondary">Logout</Button>{' '}
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
            </Nav>
                                
                        
                
        </Navbar>

    )
}