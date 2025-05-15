import { createContext } from "react";

export const UserProgressContext = createContext({
    progress: '',
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
});

export function UserProgressContextProvider({ children }) {
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('Cart');
    };

    function hideCart() {
        setUserProgress('');
    };

    function showCheckout() {
        setUserProgress('checkOut');
    };

    function hideCheckout() {
        setUserProgress('')
    };

    const userProgressCtx = {
        progress: userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }

    return (
        <UserProgressContext.Provider value={userProgressCtx}>{children}</UserProgressContext.Provider>
    )
}






export default UserProgress;