import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItems: (item) => { },
    removeItems: (id) => { }
});

function cartReducer(state,action){
    if(state.action.type === 'ADD_ITEM'){
        
    }
}

export function CartContextProvider({children}){
    useReducer()
return <CartContext>{children}</CartContext>
}

export default CartContext;