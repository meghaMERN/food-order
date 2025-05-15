import Cart from "./Components/Cart";
import CheckOut from "./Components/Checkout";
import { Header } from "./Components/Header";
import { Meals } from "./Components/Meals";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressContextProvider } from "./Store/UserProgress";

function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <CheckOut/>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
