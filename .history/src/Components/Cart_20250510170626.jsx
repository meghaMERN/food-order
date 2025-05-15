import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import {currencyFormatter} from '../Util/formatting.js';
import { useContext } from "react";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext
    const cartTotal = cartCtx.items.reducer((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    return <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) =>
                <li key={item.id}>{item.name} - {item.quantity}</li>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly>Close</Button>
            <Button>Go to Checkout</Button>
        </p>
    </Modal>
}