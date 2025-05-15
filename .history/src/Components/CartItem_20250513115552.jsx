export default function CartItem({ name, quantity, price }) {
    return <li className="cart-item">
        <p>{name} - {quantity} * {price}</p>
        <p>
            <button></button>
            <span></span>
            <button></button>
        </p>
    </li>
}