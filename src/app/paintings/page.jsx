"use client";

import "@/app/globals.css";
import Image from "next/image";
import Masonry from "@mui/lab/Masonry";
import { useState } from "react";
import Modal from "@/components/Modal";

const imageSources = [
  {
    name: "WIP",
    link: "/assets/images/paintings/painting1.png",
    caption: "WIP",
  },
  {
    name: "Pedro Pascal",
    link: "/assets/images/paintings/painting5.jpg",
    caption:
      "Celebrity portrait | An assignment in my oil class where we had to pick out a celebrity to paint and to make sure it shared a likeness to them. I went with Padro Pascal specifically a picture of him from the HBO adaptation of The Last of Us. Total time about 22 hours ",
  },
  {
    name: "Male Torso",
    link: "/assets/images/paintings/painting3.jpg",
    caption:
      "Oil from Life - male torso | 2 and a half-hour session from life | Spring 2024 | Oil on canvas paper",
  },
  {
    name: "Siesta key at night",
    link: "/assets/images/paintings/painting4.png",
    caption:
      "Figure in an environment- Siesta key at night. | I decided to focus more on the environment compared to the figure to practice landscapes more for concept art. | 16 hours | Fall 2023 | Oil on canvas paper",
  },
  {
    name: "Male Head",
    link: "/assets/images/paintings/IMG_0359.jpg",
    caption:
      "Oil from Life - male head | 2 and a half-hour session from life | Fall  2024 | Oil on canvas paper",
  },
  {
    name: "Ripley",
    link: "/assets/images/paintings/IMG_0226.jpg",
    caption:
      "Oil from Life - Ripley | 2 and a half-hour session from life | Fall 2024 | Oil on canvas paper",
  },
  {
    name: "Riven",
    link: "/assets/images/paintings/riven_ionia.jpg",
    caption:
      "Riven | A painting of Riven from League of Legends in Ionia. | 20 hours | Fall 2024 | Oil on canvas paper",
  },
  {
    name: "Riply",
    link: "/assets/images/paintings/riply_portrait.jpg",
    caption:
      "Ripley | A portrait of Ripley from the Alien franchise. | 20 hours | Fall 2024 | Oil on canvas paper",
  },
  {
    name: "Evelynn",
    link: "/assets/images/paintings/eve_study.jpg",
    caption: "WIP",
  },
  {
    name: "bust",
    link: "/assets/images/paintings/bust_urple.jpg",
    caption: "Bust | A bust",
  },
];

export default function Paintings() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalCaption, setModalCaption] = useState("");

  const handleImageClick = (src, index) => {
    setModalImageSrc(src.link);
    setModalCaption(src.caption);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setModalCaption("");
  };

  return (
    <div className="px-4">
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        sx={{ maxWidth: 1200, margin: "auto" }}
      >
        {imageSources.map((src, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(src, index)}
            className="relative w-full max-w-[300px] h-[200px] md:max-w-[400px] md:h-[250px] overflow-hidden"
          >
            <Image
              src={src.link}
              alt={`Painting ${index + 1}`}
              fill
              className="cursor-pointer object-cover rounded-md"
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
