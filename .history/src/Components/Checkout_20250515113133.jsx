import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from '../Util/formatting.js';
import { Input } from "./UI/Input.jsx";
import UserProgressContext from "../Store/UserProgress.jsx";
import Button from "./UI/Button.jsx";
import usehttp from "../Hooks/usehttp.js";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function CheckOut() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { data, loading, error, sendrequest } = usehttp('http://localhost:3000/orders', requestConfig)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    };

    function handleSubmit(e) {
        e.preventDefault();

        const fd = new FormData(e.target);
        const customerData = Object.fromEntries(fd.entries());

        sendrequest(JSON.stringify({
            order: {
                items,
                customer: customerData
            },
        })
        )
    }

    fetch('http://localhost:3000/orders',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items,
                    customer: customerData
                }
            })
        });

    let actions = (<>
    </>);

    return <Modal open={userProgressCtx.progress === 'checkOut'} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
            <h2>CheckOut</h2>
            <p>Total Amount: {CurrencyFormatter.format(cartTotal)}</p>
            <Input label="Full-Name" type="text" id="name" />
            <Input label="E-mail Address" type="email" id="email" />
            <Input label="Street" type="text" id="street"></Input>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>
            <p className="modal-actions">
            
            </p>
        </form>
    </Modal>
}