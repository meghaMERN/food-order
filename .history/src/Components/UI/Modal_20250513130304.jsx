import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

export default function Modal({ children, open, onClose, className = '' }) {
    const dailog = useRef();

    useEffect(() => {
        const modal = dailog.current
        if (open) {
            modal.showModal();
        }

        return () => modal.close();

    }, [open])

    return createPortal(
        <dialog ref={dailog} className={`modal ${className}`} onClose = {onclose}>{children}</dialog>,
        document.getElementById('modal'))
}