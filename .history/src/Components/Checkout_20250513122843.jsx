import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from '../Util/formatting.js';
import { Input } from "./UI/Input.jsx";

export default function CheckOut() {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    return <Modal>
        <form>
            <h2>CheckOut</h2>
            <p>Total Amount: {CurrencyFormatter.format(cartTotal)}</p>
            <Input label="Full-Name" type="text" />
        </form>
    </Modal>
}