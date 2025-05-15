import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItems: (item) => { },
    removeItems: (id) => { }
});

function CartContextProvider({children}){
return <CartContext>{}</CartContext>
}