import { Header } from "./Components/Header";
import { Meals } from "./Components/Meals";
import { CartContextProvider } from "./Store/CartContext";
function App() {
  return (
    <>
      <Header />
      <Meals/>
    </>
  );
}

export default App;
