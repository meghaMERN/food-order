import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
export default function Modal({ children, open, className = '' }) {
    const dailog = useRef();
    useEffect(() => {
        const modal = dailog.current
        if (open) {
            dailog.current.showModal();
        }

        return () => dailog.current

    }, [open])

    return createPortal(
        <dialog ref={dailog} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById('modal'))
}