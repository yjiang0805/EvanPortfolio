"use client";

import "@/app/globals.css";

import Carousel from "@/components/Carousel.jsx";

const imageSources = [
  "/assets/images/concepts/group_collab/color_studies.png",
  "/assets/images/concepts/group_collab/environment_value_studies.png",
  "/assets/images/concepts/group_collab/evil_empress_.png",
  "/assets/images/concepts/group_collab/group_collab_cover.png",
];

export default function GroupCollab() {
  return <Carousel title="Group Collab" imageSources={imageSources} />;
}
