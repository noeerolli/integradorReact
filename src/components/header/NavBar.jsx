
import {Button, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LoginContext } from '../login/LoginContext';
import { CartContext } from '../cart/CartContext';
import {FaOpencart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Logo } from './Logo';
import '../header/header.css';

export const NavBar =()=>{
 
    
    const {logout, waiting} = useContext(LoginContext);


    const {cartCounter} = useContext(CartContext)


    return(
        
        <Navbar expand="sm" bg="dark" variant="dark">

            
            <Nav id='menu' className="me-auto d-flex align-items-center">

                <Logo/>
                <NavDropdown title="Productos" id="collasible-nav-dropdown" >
                    <NavDropdown.Item >
                      <Link  className='flex-center' to= "/collectibles"> Coleccionables </Link>
                    </NavDropdown.Item>
                   
                      <Link className='flex-center' to= "/clothing"> Indumentaria </Link>
                    <NavDropdown.Item >
                    </NavDropdown.Item>
                
                    
                </NavDropdown>

                <Link to="/contact" style={{color:"white"}}><Nav>Contacto</Nav></Link>
                
            </Nav>

             
            <div className='nav' id='nav-login'>
                <div>
                    <Link to='cart'>
                        <div id='cart-icon' style={{color:'white'}}>
                            <FaOpencart style={{color: 'white', fontSize: '230%'}} />
                            {cartCounter} 
                        </div>   
                    </Link>
                </div>
                <div>
                    <Link to="/login"><Button variant="light mx-2" disabled={waiting} >Login</Button ></Link>
                    <Button variant="light mx-2" onClick={logout}>Logout</Button>
                </div>
            </div>
                            
                        
                
        </Navbar>

    )
}