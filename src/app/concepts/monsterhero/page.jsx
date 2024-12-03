"use client";

import "@/app/globals.css";

import Carousel from "@/components/Carousel.jsx";

const imageSources = [
  "/assets/images/concepts/monster_hero/IMG_3522.PNG",
  "/assets/images/concepts/monster_hero/IMG_3523.PNG",
  "/assets/images/concepts/monster_hero/IMG_3524.PNG",
  "/assets/images/concepts/monster_hero/IMG_3525.PNG",
  "/assets/images/concepts/monster_hero/IMG_3526.PNG",
  "/assets/images/concepts/monster_hero/IMG_3527.PNG",
  "/assets/images/concepts/monster_hero/IMG_3531.PNG",
];

export default function MonsterHero() {
  return <Carousel title="Monster V Hero" imageSources={imageSources} />;
}
