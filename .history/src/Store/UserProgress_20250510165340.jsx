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
    const [userProgress, setUserProgress] = useState('');

    function showCart(){
        setUserProgress('Cart');
    };

    function hideCart(){
        setUserProgress('');
    }
    return (
        <UserProgressContext>{children}</UserProgressContext>
    )
}






export default UserProgress;