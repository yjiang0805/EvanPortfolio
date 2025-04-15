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
      <div className="relative w-11/12 max-w-[400px] md:max-w-3/4 lg:max-w-2/3 h-auto max-h-[90%] p-4 rounded-lg bg-black overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          src={imageSrc}
          alt="Zoomed"
          className="w-full h-auto object-contain rounded"
        />
        <div className="text-white font-beaufort text-center mt-4 text-sm md:text-base lg:text-lg">
          {caption}
        </div>
      </div>
    </div>
  );
}
