export default function CartItem({name,quantity,price}) {
    return <li className="cart-item">
        <p>{name} - {quantity} * </p>
        <p>
            <button></button>
            <span></span>
            <button></button>
        </p>
    </li>
}