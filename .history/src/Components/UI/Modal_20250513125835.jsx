import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, className = '' }) {
    const dailog = useRef();

    useEffect(() => {
        const modal = dailog.current
        if (open) {
            modal.showModal();
        }

        return () => modal.close();

    }, [open])

    return createPortal(
        <dialog ref={dailog} className={`modal ${className}`} onc>{children}</dialog>,
        document.getElementById('modal'))
}