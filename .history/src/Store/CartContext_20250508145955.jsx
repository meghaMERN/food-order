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
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
              ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem; 
        } else {
            updatedItems.push({...action.item,quantity:1});
        }

        return {...state,items:updatedItems}
    }

    if (state.action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.item[existingCartItemIndex]
    }
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });
    return <CartContext>{children}</CartContext>
}

export default CartContext;