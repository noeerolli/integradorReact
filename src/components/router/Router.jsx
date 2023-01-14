import { Route, Routes } from "react-router-dom"
import { Collectibles } from "../main/pages/Collectibles"
import { CheckoutBox } from "../cart/CheckoutBox"
import { ItemDetails } from "../main/pages/ItemDetails"
import { Clothing } from "../main/pages/Clothing"
import { Contact } from "../main/pages/Contact"
import { SignUp } from "../login/SignUp"
import { Login } from "../login/Login"
import { Home } from "../main/home/Home"
import { Cart } from "../cart/Cart"
import { SearchPage } from "../main/pages/SearchPage"

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
            <Route path='/SearchPage/:searchParam' element={<SearchPage/>}/>
        </Routes>
    )
}