import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // No renderizar nada si no está abierto

  return (
    <div
      className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
      onClick={onClose} // Cierra el modal si haces clic fuera del contenido
    >
      <div
        className="modal-content bg-gray-950 p-6 rounded-lg shadow-lg max-w-6xl h-full w-full"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
      >
        <button
          className="close text-red-600 text-xl float-right font-bold"
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
