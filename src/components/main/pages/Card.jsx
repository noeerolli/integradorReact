import { Button } from "react-bootstrap"
import '../pages/pages.css';




export const Card = ({name, price, image, currency}) => {

    return (
        
        <div className="card" style={{height:"450px"}}>
        <div className="card-header flex-center"  style={{color:"black"}}>Precio: {currency} {price}</div>
        <div style={{display:"flex", justifyContent: "center"}}><img  className="card-img card-img-clothing"  src={image} alt={name} /></div>
        <div className="card-body flex-center">
          <h5 style={{color:"black", fontWeight:"bold"}}>{name}</h5>  
        </div>
        <div className="flex-center" style={{marginBottom:"15px"}}>
          <Button  variant="dark">Ver más</Button>{" "} 
        </div>
      </div>

    )
}
