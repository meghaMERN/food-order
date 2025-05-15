import { createPortal } from "react-dom"

export default function Modal({ children,open }) {
    useffe
    return createPortal(
    <dialog>{children}</dialog>,
     document.getElementById('modal'))
}