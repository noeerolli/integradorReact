import { useEffect, useState } from "react";

export const useFetch =(id)=>{

    const [productsDB, setproductsDB] = useState([]);
  
    useEffect(()=>{
      fetch("productsDB.json")
        .then(response => response.json()
        .then(datos =>{

          datos = id ? datos.find(product => product.id === id) : datos

          setproductsDB(datos)



        }))
    }, [id])


    return{productsDB}
}