import logoimg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../Store/CartContext.jsx';
import { useContext } from 'react';

export function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext

    const totalCartItems = cartCtx.items.reduce((totalnumberofItems,item)=>{
        return totalnumberofItems + item.quantity
    },0)

    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="foodLogo" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
} 