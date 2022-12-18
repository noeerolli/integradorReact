

import { useEffect, useState } from "react";
import { getProducts } from "../firebase/utilities/products";



export const useFetch =(route = undefined, id=false)=>{
  

    const [productsData, setproductsData] = useState([]);
    const [loading, setLoading] = useState(true);

  
    useEffect(()=>{
      
      if(loading){   
        getProducts(route)
        .then(datos =>{
          datos = id ? datos.find(product => product.id === id) : datos
    
          setproductsData(datos)
          setLoading(false)
        })

      }
      

    }, [route, id, loading])


    return{productsData}
}

