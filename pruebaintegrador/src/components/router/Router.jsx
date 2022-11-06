import { Route, Routes } from "react-router-dom"
import { Home } from "../main/home/Home"
import { Collectibles } from "../main/pages/Collectibles"
import { Contact } from "../main/pages/Contact"
import { ItemDetails } from "../main/pages/ItemDetails"

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collectibles' element={<Collectibles />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/items/:id' element={<ItemDetails />} />
        </Routes>
    )
}