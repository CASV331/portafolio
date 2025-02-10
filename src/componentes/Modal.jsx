import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalContentRef = useRef(null);
  let initialY = 0;

  useEffect(() => {
    // const handleBodyScroll = (e) => {
    //   document.body.style.overflow = isOpen ? "hidden" : "";
    //   document.body.style.touchAction = isOpen ? "none" : "";
    // };

    // const handleTouchStart = (e) => {
    //   initialY = e.touches[0].clientY;
    // };

    // const handleTouchMove = (e) => {
    //   if (!isOpen) return;

    //   const currentY = e.touches[0].clientY;
    //   const modalContent = modalContentRef.current;

    //   if (modalContent) {
    //     const isScrollingUp = initialY > currentY;
    //     const isScrollingDown = initialY < currentY;
    //     const isAtTop = modalContent.scrollTop === 0;
    //     const isAtBottom =
    //       modalContent.scrollTop + modalContent.clientHeight >=
    //       modalContent.scrollHeight;

    //     if ((isScrollingDown && isAtTop) || (isScrollingUp && isAtBottom)) {
    //       e.preventDefault();
    //     }
    //   }
    // };
    const handleScroll = (e) => {
      if (isOpen) {
        e.preventDefault();
      }
    };

    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll, { passive: false });
    } else {
      document.documentElement.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null; // No renderizar nada si no está abierto

  return (
    <div
      className="modal fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-30 z-50"
      onClick={onClose} // Cierra el modal si haces clic fuera del contenido
    >
      <div
        className="modal-content m-auto bg-black bg-opacity-90 p-6 rounded-3xl shadow-lg max-w-6xl w-full h-full"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
      >
        <button
          className="close text-red-400 text-xl float-right font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
