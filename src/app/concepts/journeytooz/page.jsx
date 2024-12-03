"use client";

import "@/app/globals.css";

import Carousel from "@/components/Carousel.jsx";

const imageSources = [
  "/assets/images/concepts/journey_reimagine/IMG_3322.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3324.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3325.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3326.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3327.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3328.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3329.PNG",
  "/assets/images/concepts/journey_reimagine/IMG_3330.PNG",
];

export default function JourneyToOz() {
  return (
    <Carousel title="Journey To Oz Reimagine" imageSources={imageSources} />
  );
}
