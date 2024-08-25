"use client";

import "@/app/globals.css";

import Carousel from "@/components/Carousel.jsx";

const imageSources = [
  "/assets/images/concepts/traditional_to_digit_house/environments_prompts_pt_1.png",
  "/assets/images/concepts/traditional_to_digit_house/environments_prompts_pt_2.png",
  "/assets/images/concepts/traditional_to_digit_house/morning_mood_cover.png",
];

export default function TraditionalToDigital() {
  return (
    <Carousel title="Traditional to Digital" imageSources={imageSources} />
  );
}
