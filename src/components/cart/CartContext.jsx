import { createContext, useState } from "react";

//lo usamos cuando algunos datos tienen q ser accesibles por varios componentes de diferente nivel
export const CartContext = createContext() 

export const CartProvider = ({children}) =>{

    const [cartCounter, setCartCounter] = useState(0)
    const [item, setItem] = useState([])


    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )


}