"use client";

import "./globals.css";
import HomeFolder from "@/components/HomeFolder.jsx";

export default function Home() {
  return (
    <div className="flex space-x-8 justify-center items-center">
      <HomeFolder
        props={{
          url: "/assets/images/home_page/master_chief_vertical.png",
          alt: "Digital",
          name: "Digital",
          link: "/digital",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/home_page/deimos_bouty_room_vertical.png",
          alt: "Paintings",
          name: "Paintings",
          link: "/paintings",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/home_page/cyber_punk_street_vertical.png",
          alt: "Concepts",
          name: "Concepts",
          link: "/concepts",
        }}
      />
    </div>
  );
}
