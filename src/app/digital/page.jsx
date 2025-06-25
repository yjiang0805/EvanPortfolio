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
  {
    name: "Digital",
    link: "/assets/images/digitals/luna_snow_study.jpg",
    caption: "",
  },
  {
    name: "Digital",
    link: "/assets/images/digitals/px_1_copy_2.jpg",
    caption: "",
  },
  {
    name: "Digital",
    link: "/assets/images/digitals/spacegoove_city.png",
    caption: "",
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
    <div className="px-4">
      <Masonry
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
        sx={{ maxWidth: 1200, margin: "auto" }}
      >
        {imageSources.map((image, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(image.link, image.caption)}
            className="relative w-full max-w-[300px] h-[200px] md:max-w-[400px] md:h-[250px] overflow-hidden"
          >
            <Image
              src={image.link}
              alt={image.name}
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
