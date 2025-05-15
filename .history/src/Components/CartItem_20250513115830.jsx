import {CurrencyFormatter} from '../Util/formatting.js'

export default function CartItem({ name, quantity, price }) {
    return <li className="cart-item">
        <p>{name} - {quantity} x {CurrencyFormatter.price}</p>
        <p className="cart-item-actions">
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
        </p>
    </li>
}