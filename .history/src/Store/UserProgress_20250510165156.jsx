import { createContext } from "vm";
import CartContext from "./CartContext";

const UserProgress = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
});

export function UserProgressContextProvider({ children }) {
    const [first, setfirst] = useState(second)
    return (
        <UserProgressContext>{children}</UserProgressContext>
    )
}






export default UserProgress;