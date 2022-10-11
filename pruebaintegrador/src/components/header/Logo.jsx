import { Navbar } from 'react-bootstrap'
import logo from '../../assets/img/logo.jpg'


export const Logo = () =>{
    return(
              
        <Navbar.Brand  className='d-flex align-items-center ' href="/">
                        <img
                        src={logo}
                        alt= "logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        />{''}
                        WARSIES
                         
        </Navbar.Brand>
        
    )
}