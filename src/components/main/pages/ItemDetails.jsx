import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartBox } from "../../cart/CartBox";
//import { useFetch } from "../../../hooks/useFetch";



export const ItemDetails = () =>{

    //parámetro de la ruta
    const {id} = useParams();
    //console.log(id)
    
    //const{productsDB: item} = useFetch(id)  

    const [item, setItem] = useState([])

    useEffect(()=>{
        fetch("/productsDB.json") //sin la url no funciona
          .then(response => response.json())
          .then(datos =>{
                setItem(datos.find(product =>product.id===parseInt(id)))
            })
            
    }, [id])

    return(<>

            <h1 className="title" style={{marginTop:"2em", marginBottom: "2em"}}>Detalles del producto</h1>

                
                <div className="card" style={{display:"flex", flexDirection:"row", margin:"4em"}} >
                    
                    <div className="imgContainer" style={{display:"flex", flexDirection:"column"}}>
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


