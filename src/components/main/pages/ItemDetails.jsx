
import { useParams } from "react-router-dom";
import { CartBox } from "../../cart/CartBox";
import { useFetch } from "../../../hooks/useFetch";
import { collection } from "firebase/firestore/lite";
import { firebaseDb } from "../../../firebase/config";



export const ItemDetails = () =>{

    const productsDb = collection(firebaseDb, 'productos')

    const {id} = useParams();

    const{productsData: item} = useFetch(productsDb, id)  


    return(<>

            <h1 className="title" style={{marginTop:"2em", marginBottom: "2em"}}>Detalles del producto</h1>

                
                <div className="card" style={{display:"flex", flexDirection:"row", margin:"4em"}} >
                    
                    <div className="imgContainer flex-center" style={{display:"flex", flexDirection:"column"}}>
                        <img className="card-img" src={item.image} alt={item.name} />
                        <p>Precio: {item.price}</p>
                    </div>
                    
                    
                    <div className="card-body" style={{display:"flex", width:"100%", justifyContent:"center"}}>
                        <div style={{display:"flex", flexDirection:"column", width:"100%", textAlign:"center"}}>
                            <div className ='card-title'>{item.name}</div>
                            <div className ='card-text'>
                            {item.description}
                            </div>
                            <div className ='card-text'>
                            {item.details}
                            </div>
                        </div>
                        
                        
                        <CartBox products={item}></CartBox >
                        
                    </div>
                    
                </div>

    
            

             
        </>
    )
}


