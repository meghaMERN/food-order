import { createPortal } from "react-dom";
import { useEffect,useRef } from "react";
export default function Modal({ children, open }) {
   const dailogue = useRef();
    useEffect(() => {
        if (open) {

        }
    }, [open])

    return createPortal(
        <dialog>{children}</dialog>,
        document.getElementById('modal'))
}