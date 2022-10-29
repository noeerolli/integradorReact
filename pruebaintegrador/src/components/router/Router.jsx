import { Route, Routes } from "react-router-dom"
import { Home } from "../main/home/Home"
import { Collectibles } from "../main/pages/Collectibles"

export const Router = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collectibles' element={<Collectibles />} />
            <Route path='/contact' element={<Collectibles />} />
        </Routes>
    )
}