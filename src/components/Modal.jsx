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
      <div className="relative w-full max-w-[95%] md:max-w-[90%] lg:max-w-[80%] h-full max-h-[95%] p-4 rounded-lg bg-black overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex-1 flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain rounded"
          />
        </div>
        <div className="text-white font-beaufort text-center mt-4 text-sm md:text-base lg:text-lg">
          {caption}
        </div>
      </div>
    </div>
  );
}
