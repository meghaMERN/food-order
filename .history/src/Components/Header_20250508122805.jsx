import logoimg from '../assets/logo.jpg';
import Button from './UI/Button.j';

export function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="foodLogo" />
                <h1>React Food</h1>
            </div>
            <nav>
                <Button textOnly>Cart</Button>
            </nav>
        </header>
    )
} 