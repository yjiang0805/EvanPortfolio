"use client";

import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";

const imageSources = [
  {
    name: "Shadow Isles",
    link: "/assets/images/digitals/digital1.png",
    caption:
      "Free-hand Environment painting of the shadow isles from League of Legends | Summer 2024 | Done in procreate\n",
  },
  {
    name: "Environment painting inspired by the dessert biomes",
    link: "/assets/images/digitals/digital2.png",
    caption:
      "Environment painting inspired by the dessert biomes in The First Descendant | Summer 2024 | Done in procreate",
  },
  {
    name: "Digital Painting of Splendid Staff Nami",
    link: "/assets/images/digitals/digital3.png",
    caption:
      "Digital Painting of Splendid staff Nami done for MerMay | Summer 2024 | Done in procreate ",
  },
  {
    name: "Environment painting of the Necralisk",
    link: "/assets/images/digitals/digital4.png",
    caption:
      "Environment painting of the Necralisk from Warframe using the in-game Captura tool | Summer 2024 | Done in procreate",
  },
  {
    name: "Environment painting inspired by the dessert biomes in The First Descendant",
    link: "/assets/images/digitals/digital5.PNG",
    caption:
      "Environment painting inspired by the dessert biomes in The First Descendant | Summer 2024 | Done in procreate ",
  },
  {
    name: "Environment painting of the plains of Eidolon",
    link: "/assets/images/digitals/IMG_2950.jpeg",
    caption:
      "Environment painting of the plains of Eidolon from Warframe | Summer 2023 | Done in procreate",
  },
  {
    name: "Environment painting of Mari Nui",
    link: "/assets/images/digitals/IMG_2956.png",
    caption:
      "Environment painting of Mari Nui from Bionicle | Summer 2023 | Done in procreate",
  },
  {
    name: "Digital 8",
    link: "/assets/images/digitals/IMG_3266.PNG",
    caption: "WIP",
  },
  {
    name: "Keke Palmer Rouge",
    link: "/assets/images/digitals/IMG_3358.PNG",
    caption: "Keke Palmer Rouge fan-cast | Fall 2023 | Done in procreate",
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
