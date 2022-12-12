import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import { addProduct, addProducts, deleteProduct, getProductById, getProductByName, getProducts, setProduct, updateProduct } from './firebase/utilities/products';

//EJEMPLOS  agregar, obtener, modificar y borrar productos

//obtener prod

//getProducts().then(res=>console.log(res))


//agregar producto

//let a ={mombre: "juan", edad:15} ;
//addProduct(a).then(res=>console.log(res.id))

//agregar varios productos

/*fetch("productsDB.json")
  .then(res => res.json())
  .then(docs => addProducts(docs))
*/

// buscar prod por id

//const id = "0IK76DbqUmKzhiTKWYHv";
//getProductById(id);


//buscar por otro campo

//const name ="Baby Yoda";
//getProductByName(name);

//actualizar o crear producto(si no existe)

//const id = "11"
//const newProduct = {nombre: "taza", precio: 1200}
//setProduct(id, newProduct, true)

//actualizar producto (si ya existe)

//const id = "11";
//const product = {nombre: "taza", precio: 2000};
//updateProduct(id, product)


//borrar producto

//const id = "11";
//deleteProduct(id);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);


