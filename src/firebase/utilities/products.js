import { collection } from "firebase/firestore/lite";
import { firebaseDb } from "../config";


const productsDb = collection(firebaseDb, 'productos')
