import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItems: (item) => { },
    removeItems: (id) => { }
});

function cartReducer(action){

}

export function CartContextProvider({children}){
    useReducer()
return <CartContext>{children}</CartContext>
}

export default CartContext;