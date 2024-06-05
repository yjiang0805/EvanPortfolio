"use client";

import "./globals.css";
import HomeFolder from "@/components/HomeFolder.jsx";

export default function Home() {
  return (
    <div className="flex space-x-8 justify-center items-center">
      <HomeFolder
        props={{
          url: "/assets/images/home page /deimos bouty room vertical.png",
          alt: "Digital",
          name: "Digital",
          link: "/digital",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/home page /master chief vertical.png",
          alt: "Paintings",
          name: "Paintings",
          link: "/paintings",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/home page /cyber punk street vertical.png",
          alt: "Concepts",
          name: "Concepts",
          link: "/concepts",
        }}
      />
    </div>
  );
}
