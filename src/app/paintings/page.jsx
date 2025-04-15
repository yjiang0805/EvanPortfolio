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
    link: "/assets/images/paintings/painting2.jpg",
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
    name: "Marina in blue dress",
    link: "/assets/images/paintings/painting4.png",
    caption:
      "Oil from life - Marina in blue dress | 7-hour session (3 separate sessions) | Spring 2024 | Oil on canvas paper",
  },
  {
    name: "Siesta key at night",
    link: "/assets/images/paintings/painting5.jpg",
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
    name: "Female Head",
    link: "/assets/images/paintings/IMG_0326.jpg",
    caption:
      "Oil from Life - female head | 2 and a half-hour session from life | Fall 2024 | Oil on canvas paper ",
  },
  {
    name: "Ripley",
    link: "/assets/images/paintings/IMG_0226.jpg",
    caption:
      "Oil from Life - Ripley | 2 and a half-hour session from life | Fall 2024 | Oil on canvas paper",
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
          <div key={index} onClick={() => handleImageClick(src, index)}>
            <Image
              src={src.link}
              alt={`Painting ${index + 1}`}
              width={400}
              height={400}
              className="cursor-pointer rounded-md"
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
