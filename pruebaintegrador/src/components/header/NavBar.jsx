
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import { Logo } from './Logo'


//este componente debería desglosarlo en otros componentes

export const NavBar =()=>{
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

                <Nav.Link href="#sale">Ofertas</Nav.Link>
                
            </Nav>
                            

            <Nav >
                <Button variant="secondary" size="sm">Login</Button>
               
                <Button variant="secondary" size="sm">Logout</Button>
                
            </Nav>
                                
                        
                
        </Navbar>

    )
}