import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
export default function Modal({ children, open , className}) {
    const dailog = useRef();
    useEffect(() => {
        if (open) {
            dailog.current.showModal();
        }
    }, [open])

    return createPortal(
        <dialog ref={dailog} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal'))
}