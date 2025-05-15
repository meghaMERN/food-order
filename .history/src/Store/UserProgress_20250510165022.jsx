import { createContext } from "vm";
import CartContext from "./CartContext";

const UserProgress = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
});

export function userProgress(){

}






export default UserProgress;