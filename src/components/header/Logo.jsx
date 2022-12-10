import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.jpg'


export const Logo = () =>{
    return(
          <Link to='/'>   
            <Navbar.Brand  className='d-flex align-items-center '>
                            <img
                                src={logo}
                                alt= "logo"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />{''}
                            WARSIES
                            
            </Navbar.Brand>
        </Link> 
        
    )
}