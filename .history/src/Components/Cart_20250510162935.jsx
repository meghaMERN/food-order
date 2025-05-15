import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext)
    return <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </Modal>
}