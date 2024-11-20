import React from "react";

export default function Modal({ isOpen, onClose, imageSrc, caption }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 h-3/4 p-4">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt="Zoomed"
          className="w-full h-full object-contain"
        />
        <div className="text-white text-center mt-4">{caption}</div>
      </div>
    </div>
  );
}
