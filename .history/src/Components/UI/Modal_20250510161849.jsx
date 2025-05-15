import { createPortal } from "react-dom"

export default function Modal({ children,open }) {
    useEffect(() => {
      
    }, [third])
    
    return createPortal(
    <dialog>{children}</dialog>,
     document.getElementById('modal'))
}