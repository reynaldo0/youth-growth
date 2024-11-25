import React from "react";
import { createPortal } from "react-dom";
import RegistrationForm from "./RegistrationForm";

const Modal = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      onClose();
    }
  };

  return createPortal(
    <div
      id="modalOverlay"
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-800 float-right font-bold text-lg"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-red-700 mb-4">
          Daftar untuk {event.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Tanggal:</strong> {event.date}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Lokasi:</strong> {event.location}
        </p>
        <RegistrationForm/>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
