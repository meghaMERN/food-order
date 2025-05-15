import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const cartTotal =cartCtx.items.reducer((totalPrice, item)=>totalprice , 0)

    return <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) =>
                <li key={item.id}>{item.name} - {item.quantity}</li>)}
        </ul>
        <p>Total Cart Items </p>
    </Modal>
}