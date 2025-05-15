import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItems: (item) => { },
    removeItems: (id) => { }
});

function cartReducer(state, action) {
    if (state.action.type === 'ADD_ITEM') {
        state.items.push
    }

    if (state.action.type === 'REMOVE_ITEM') {

    }
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });
    return <CartContext>{children}</CartContext>
}

export default CartContext;