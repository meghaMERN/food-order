import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../Store/CartContext";

export default function CheckOut(){
    const cartCtx = useContext(cart)
    return <Modal>
        <form>
            <h2>CheckOut</h2>
            <p>Total Amount:</p>
        </form>
    </Modal>
}