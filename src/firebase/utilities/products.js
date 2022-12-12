

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore/lite";
import { firebaseDb } from "../config";


const productsDb = collection(firebaseDb, 'productos') //referencia al documento de la base de datos


/**** para agregar documentos ******/

export const addProduct = (doc) =>{
  return addDoc (productsDb, doc)

}

//******  traer los productos(documentos) ******/

export const getProducts = async (docDB) => {
    const collection = await getDocs(docDB); 
    const products = collection.docs.map(doc => {
        return {...doc.data(), id: doc.id}
    })
    return products;
}



//***** agregar varios documentos   ******/


export const addProducts = (docs) => {
    docs.forEach(doc => {
     addProduct(doc);   
    });
}


//*******  buscar un producto/ documento por id    ********/



export const getProductById = (id) => {
    const product = doc(firebaseDb, "productos", id)
    getDoc(product).then(res => console.log(res.data()))
}



// ******   obtener producto por otro campo del doc   ***********/

export const getProductByName = async(name) =>{
    const product = query(productsDb, where('name', '==', name));
    let found = await getDocs(product);
    found = found.docs.map(doc=>doc.data());
    console.log(found);
}

//*************   modificar con SET, si no encuentra el producto lo crea    *****/

export const setProduct = async (id, value, merge = false) => { 
const prod = doc(firebaseDb,"productos", id);
setDoc(prod, value, {merge});

}


// ***************  modificar con UPDATE, si no encuentra el producto no hace nada *****************//

export const updateProduct = async (id, values) => {
    const prod = doc(firebaseDb, "productos", id);
    updateDoc(prod, values);
}



// ******  borrar documento  *****************/


export const deleteProduct = (id) => {
    const prod = doc(firebaseDb, "productos", id);
    deleteDoc(prod);
}