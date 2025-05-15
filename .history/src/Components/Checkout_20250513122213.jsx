import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../Store/CartContext";
import  {CurrencyFormatter} from '../Util/formatting.js'

export default function CheckOut() {
    const cartCtx = useContext(CartContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);
    return <Modal>
        <form>
            <h2>CheckOut</h2>
            <p>Total Amount: {}</p>
        </form>
    </Modal>
}