import { createPortal } from "react-dom"

export default function Modal({ children,open }) {
    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    
    return createPortal(
    <dialog>{children}</dialog>,
     document.getElementById('modal'))
}