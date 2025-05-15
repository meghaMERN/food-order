import { createPortal } from "react-dom";
import { useEffect } from "react";
export default function Modal({ children, open }) {
    useEffect(() => {
        if (open) {

        }
    }, [open])

    return createPortal(
        <dialog>{children}</dialog>,
        document.getElementById('modal'))
}