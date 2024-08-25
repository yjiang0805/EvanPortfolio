"use client";

import "@/app/globals.css";
import Carousel from "@/components/Carousel.jsx";

const imageSources = [
  "/assets/images/concepts/cyberpunk_street/cyberpunk_street.png",
  "/assets/images/concepts/cyberpunk_street/cyberpunk_street_signs.png",
  "/assets/images/concepts/cyberpunk_street/IMG_2832.png",
  "/assets/images/concepts/cyberpunk_street/IMG_2834.png",
  "/assets/images/concepts/cyberpunk_street/IMG_2835.png",
];

export default function CyberpunkStreet() {
  return <Carousel title="Cyberpunk Street" imageSources={imageSources} />;
}
