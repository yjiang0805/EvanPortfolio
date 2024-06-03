"use client";

import "./globals.css";
import HomeFolder from "@/components/HomeFolder.jsx";

export default function Home() {
  return (
    <div className="grid grid-cols-2 mb-4 ml-36 mr-36 gap-4 justify-items-center items-center">
      <HomeFolder
        props={{
          url: "/assets/images/master_chief_wide.png",
          alt: "Paintings",
          name: "Paintings",
          link: "/paintings",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/master_chief_wide.png",
          alt: "Paintings",
          name: "Paintings",
          link: "/paintings",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/master_chief_wide.png",
          alt: "Paintings",
          name: "Paintings",
          link: "/paintings",
        }}
      />
      <HomeFolder
        props={{
          url: "/assets/images/master_chief_wide.png",
          alt: "Paintings",
          name: "Paintings",
          link: "/paintings",
        }}
      />
    </div>
  );
}
