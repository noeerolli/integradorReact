

import { useEffect, useState } from "react";

export const useFetch =(route="/productsDB.json", id=false)=>{
  console.log(route)

    const [productsDB, setproductsDB] = useState([]);
  
    useEffect(()=>{
      
      fetch(route)
        .then(response => response.json()
       
        .then(datos =>{
          console.log(datos)
          datos = id ? datos.find(product => product.id === id) : datos

          setproductsDB(datos)



        }))
    }, [route, id])


    return{productsDB}
}

//forma realizada en clase, lo probé y no funciona tampoco
/*
export const useFetch = (ruta= "productsDB.json" , id=false )=>{

  const [productsDB, setproductsDB] = useState([]);

  useEffect(() => {

    async function getData(){
        let datos 
        datos = await fetch(ruta)
        datos = await datos.json()

        datos = id ? datos.find(product => product.id === id) : datos

        setproductsDB(datos)

      }

      setTimeout(()=>{
        getData()
      },1000);

    

  },[id])

  return{productsDB}
}
*/