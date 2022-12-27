
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LoginContext } from '../login/LoginContext';
import { CartContext } from '../cart/CartContext';
import {FaOpencart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Logo } from './Logo'
import { useContext } from 'react';


export const NavBar =()=>{
 
    
    const {logout, waiting} = useContext(LoginContext);


    const {cartCounter} = useContext(CartContext)


    return(
        
        <Navbar expand="lg" bg="dark" variant="dark">

            
            <Nav className="me-auto d-flex align-items-center">

                <Logo/>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    <NavDropdown.Item >
                      <Link to= "/collectibles"  > Coleccionables </Link>
                    </NavDropdown.Item>
                   
                                       <NavDropdown.Item >
                    <Link to= "/clothing"  > Indumentaria </Link>
                    </NavDropdown.Item>
                    
                   
                    <NavDropdown.Divider />
                    
                    <NavDropdown.Item >
                        Ofertas
                    </NavDropdown.Item>
                </NavDropdown>

                <Link to="/contact" style={{color:"white"}}><Nav>Contacto</Nav></Link>
                
            </Nav>

             
            <Nav >
                <Link to='cart'>
                    <div style={{color:'white'}}>
                        <FaOpencart style={{color: 'white', fontSize: '230%'}} />
                        {cartCounter} 
                    </div>
                    
                </Link>
                <Link to="/login"><Button variant="light mx-2" disabled={waiting} >Login</Button ></Link>
                <Button variant="light mx-2" onClick={logout}>Logout</Button>
             
            </Nav>
                            
                        
                
        </Navbar>

    )
}