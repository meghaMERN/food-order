import { createPortal } from "react-dom"

export default function Modal({ children,open }) {
    useffect
    return createPortal(
    <dialog>{children}</dialog>,
     document.getElementById('modal'))
}