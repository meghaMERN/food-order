import { Header } from "./Components/Header";
import { Meals } from "./Components/Meals";
import { CartContextProvider } from "./Store/CartContext";
import UserProgress from "./Store/UserProgress";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
