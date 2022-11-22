import { useEffect, useState } from "react";

export const useFetch =()=>{

    const [productsDB, setproductsDB] = useState([]);
  
    useEffect(()=>{
      fetch("productsDB.json")
        .then(response => response.json()
        .then(datos =>{
          setproductsDB(datos)
        }))
    }, [])


    return{productsDB}
}