"use client";

import "@/app/globals.css";

import Carousel from "@/components/Carousel.jsx";

const imageSources = [
  "/assets/images/concepts/cyberpunk_shop_interior/IMG_2827.png",
  "/assets/images/concepts/cyberpunk_shop_interior/IMG_2839.png",
  "/assets/images/concepts/cyberpunk_shop_interior/IMG_2840.png",
  "/assets/images/concepts/cyberpunk_shop_interior/IMG_2841.png",
];

export default function CyberpunkShop() {
  return <Carousel title="Cyberpunk Shop" imageSources={imageSources} />;
}
