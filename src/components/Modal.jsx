import React from "react";

export default function Modal({ isOpen, onClose, imageSrc, caption }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-11/12 md:w-3/4 lg:w-2/3 h-3/4 p-4 rounded-lg">
        <img
          src={imageSrc}
          alt="Zoomed"
          className="w-full h-full object-contain"
        />
        <div className="text-white font-beaufort text-center mt-4">
          {caption}
        </div>
      </div>
    </div>
  );
}
