"use client";

import "@/app/globals.css";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import { useState } from "react";
import Modal from "@/components/Modal";

const imageSources = [
  "/assets/images/paintings/painting1.png",
  "/assets/images/paintings/painting2.jpg",
  "/assets/images/paintings/painting3.jpg",
  "/assets/images/paintings/painting4.png",
  "/assets/images/paintings/painting5.jpg",
];

export default function Paintings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const handleImageClick = (src, index) => {
    setModalImageSrc(src);
    setModalCaption(`Painting ${index + 1}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setModalCaption("");
  };

  return (
    <div>
      <Masonry columns={3} spacing={1} sx={{ maxWidth: 1200, margin: "auto" }}>
        {imageSources.map((src, index) => (
          <div key={index} onClick={() => handleImageClick(src, index)}>
            <Image
              src={src}
              alt={`Painting ${index + 1}`}
              width={400}
              height={400}
              className="cursor-pointer"
            />
          </div>
        ))}
      </Masonry>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={modalImageSrc}
        caption={modalCaption}
      />
    </div>
  );
}
