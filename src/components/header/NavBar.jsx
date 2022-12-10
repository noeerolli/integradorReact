
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LoginContext } from '../login/LoginContext';
import { CartContext } from '../cart/CartContext';
import {FaOpencart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Logo } from './Logo'
import { useContext } from 'react';


export const NavBar =()=>{
    // mapear opciones
    
    const {logout} = useContext(LoginContext);


    const {cartCounter} = useContext(CartContext)


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

                <Nav.Link href="/contact">Contacto</Nav.Link>
                
            </Nav>
                            

            <Nav >
                <Link to='cart'>
                    <div style={{color:'white'}}>
                        <FaOpencart style={{color: 'white', fontSize: '230%'}} />
                        {cartCounter} 
                    </div>
                    
                </Link>
                <Link to="/login"><Button variant="light mx-2" >Login</Button></Link>
                <Button variant="light mx-2" on onClick={logout}>Logout</Button>
             
            </Nav>
                            
                        
                
        </Navbar>

    )
}