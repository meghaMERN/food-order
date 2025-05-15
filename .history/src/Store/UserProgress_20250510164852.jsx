import { createContext } from "vm";
import CartContext from "./CartContext";

const UserProgress = createContext({
    progress : '',
    showCart : ()=>{},
    hidecart
})