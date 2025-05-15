import logoimg from '../assets/logo.jpg';4

export function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="foodLogo" />
                <h1>React Food</h1>
            </div>
            <nav>
                <button>Cart</button>
            </nav>
        </header>
    )
} 