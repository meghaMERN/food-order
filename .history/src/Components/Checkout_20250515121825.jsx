import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../Store/CartContext.jsx";
import { CurrencyFormatter } from '../Util/formatting.js';
import { Input } from "./UI/Input.jsx";
import UserProgressContext from "../Store/UserProgress.jsx";
import Button from "./UI/Button.jsx";
import usehttp from "../Hooks/usehttp.js";
import Error from "./Error.jsx";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}

export default function CheckOut() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const { data, loading: isSending, error, sendrequest,clearData } = usehttp('http://localhost:3000/orders', requestConfig)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice + item.quantity * item.price, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    };

    function handleFinish() {
        userProgressCtx.hideCheckout()
        cartCtx.clearCart();
        clearData();
    }

    function checkoutAction(fd) {
        const customerData = Object.fromEntries(fd.entries());

        sendrequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            },
        })
        )


        fetch('http://localhost:3000/orders',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: {
                        items: cartCtx.items,
                        customer: customerData
                    }
                })
            });
    }

    let actions = (<>
        <Button type="button" textOnly onClick={handleClose}>Close</Button>
        <Button >Submit Order</Button>
    </>);

    if (isSending) {
        actions = <span>Sending Order Data....</span>
    }

    if (data && !error) {
        return <Modal open={userProgressCtx.progress === 'checkOut'} onClose={handleFinish}>
            <h2>Success!</h2>
            <p>Your Order was submitted successfully</p>
            <p className="modal-actions">
                <Button onClick={handleFinish}>close</Button>
            </p>
        </Modal>

    }

    return <Modal open={userProgressCtx.progress === 'checkOut'} onClose={handleClose}>
        <form action={checkoutAction}>
            <h2>CheckOut</h2>
            <p>Total Amount: {CurrencyFormatter.format(cartTotal)}</p>
            <Input label="Full-Name" type="text" id="name" />
            <Input label="E-mail Address" type="email" id="email" />
            <Input label="Street" type="text" id="street"></Input>
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type="text" id="city" />
            </div>

            {error && <Error title="Failed to Submit Data" message={error} />}
            <p className="modal-actions">
                {actions}
            </p>
        </form>
    </Modal>
}