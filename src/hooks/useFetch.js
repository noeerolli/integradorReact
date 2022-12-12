

import { useEffect, useState } from "react";
import { getProducts } from "../firebase/utilities/products";



export const useFetch =(route = undefined, id=false)=>{
  console.log(route)

    const [productsData, setproductsData] = useState([]);
  
    useEffect(()=>{
      
      getProducts(route)
      .then(datos =>{
        console.log(datos)
        datos = id ? datos.find(product => product.id === id) : datos
  
        setproductsData(datos)
      })
      

    }, [route, id])


    return{productsData}
}

