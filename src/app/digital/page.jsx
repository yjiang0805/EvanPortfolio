"use client";

import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";

const imageSources = [
  {
    name: "Digital 1",
    link: "/assets/images/digitals/digital1.png",
    caption: "Caption for Digital 1",
  },
  {
    name: "Digital 2",
    link: "/assets/images/digitals/digital2.png",
    caption: "Caption for Digital 2",
  },
  {
    name: "Digital 3",
    link: "/assets/images/digitals/digital3.png",
    caption: "Caption for Digital 3",
  },
  {
    name: "Digital 4",
    link: "/assets/images/digitals/digital4.png",
    caption: "Caption for Digital 4",
  },
  {
    name: "Digital 5",
    link: "/assets/images/digitals/digital5.PNG",
    caption: "Caption for Digital 5",
  },
];

export default function Digital() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const handleImageClick = (src, caption) => {
    setModalImageSrc(src);
    setModalCaption(caption);
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
        {imageSources.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image.link, image.caption)}
          >
            <Image
              src={image.link}
              alt={image.name}
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
