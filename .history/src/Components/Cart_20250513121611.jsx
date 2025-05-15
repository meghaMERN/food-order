import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from '../Util/formatting.js';
import { useContext } from "react";
import { UserProgressContext } from "../Store/UserProgress.jsx";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleOpenCheckout() {
        userProgressCtx.showCheckout('checkOut');
    }

    return <Modal className="cart" open={userProgressCtx.progress === 'Cart'}>
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item) => (
                <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price}
                    onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)} />))}
        </ul>
        <p className="cart-total">{CurrencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly onClick={handleCloseCart}>Close</Button>
           {cartCtx.items.length > 0  &&<Button onClick={handleOpenCheckout} >Go to Checkout</Button>}
        </p>
    </Modal>
}