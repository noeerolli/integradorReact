import { Route, Routes } from "react-router-dom"
import { Cart } from "../cart/Cart"
import { CheckoutBox } from "../cart/CheckoutBox"
import { Login } from "../login/Login"
import { SignUp } from "../login/SignUp"
import { Home } from "../main/home/Home"
import { Clothing } from "../main/pages/Clothing"
import { Collectibles } from "../main/pages/Collectibles"
import { Contact } from "../main/pages/Contact"
import { ItemDetails } from "../main/pages/ItemDetails"

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collectibles' element={<Collectibles />} />
            <Route path='/clothing' element={<Clothing />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/items/:id' element={<ItemDetails />} /> {/* usamos : en la ruta para indicar que tomará parámetros*/}
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/checkout' element={<CheckoutBox/>}/>
        </Routes>
    )
}