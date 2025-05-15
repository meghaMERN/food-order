import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItems: (item) => { },
    removeItems: (id) => { }
});

function cartReducer(){}

export function CartContextProvider({children}){
    useReducer()
return <CartContext>{children}</CartContext>
}

export default CartContext;