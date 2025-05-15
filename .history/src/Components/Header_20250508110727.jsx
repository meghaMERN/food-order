import logoimg from '../assets/logo.jpg'

export function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoimg} alt="" />
                <h1>React Food</h1>
            </div>
            <nav>
                <button>Cart</button>
            </nav>
        </header>
    )
} 