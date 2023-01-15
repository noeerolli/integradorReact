import { Button } from "react-bootstrap"
import '../pages/pages.css';




export const Card = ({name, price, image, detail, currency}) => {

    return (
        
        <div className=" products-card card" >
        <div className="card-header flex-center"  style={{color:"black"}}>Precio: {currency} {price}</div>
        <div style={{display:"flex", justifyContent: "center"}}><img  className="card-img card-img-clothing"  src={image} alt={name} /></div>
        <div className="card-body flex-center ">
          <h5 style={{color:"black", fontWeight:"normal"}}>{name}</h5>  
          <p style={{color:"black"}}>{detail}</p>
        </div>
        <div className="flex-center" style={{marginBottom:"15px"}}>
          <Button  variant="dark">Ver más</Button>{" "} 
        </div>
      </div>

    )
}
