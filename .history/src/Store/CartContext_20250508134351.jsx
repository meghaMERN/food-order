import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItems: (item) => { },
    removeItems: (id) => { }
});

function cartReducer(state, action) {
    if (state.action.type === 'ADD_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        )
        const updatedItems = [...state.items];

        if (existingCartItemIndex) {
            
            const updatedItem = {
                ...state.items[existingCartItemIndex],
                quantity: state.items[existingCartItemIndex].quantity + 1
            };
        } else {
            updatedItems.push(action.item);
        }
    }

    if (state.action.type === 'REMOVE_ITEM') {

    }
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });
    return <CartContext>{children}</CartContext>
}

export default CartContext;