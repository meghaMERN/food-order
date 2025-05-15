import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from '../Util/formatting.js';
import { Input } from "./UI/Input.jsx";
import UserProgressContext from "../Store/UserProgress.jsx";

export default function CheckOut() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose(){

    };
    
    return <Modal open={userProgressCtx.progress === 'checkout'}>
        <form>
            <h2>CheckOut</h2>
            <p>Total Amount: {CurrencyFormatter.format(cartTotal)}</p>
            <Input label="Full-Name" type="text" id="full-name" />
            <Input label="E-mail Address" type="email" id="email"/>
            <Input label="Street" type="text" id="street"></Input>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code"/>
                <Input label="City" type="text" id="city"/>
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}