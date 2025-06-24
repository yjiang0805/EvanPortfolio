"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 text-black">
      <p className="md:text-lg font-spiegel">Follow my socials:</p>
      <a
        href="https://www.instagram.com/evanpatlee_art"
        target="_blank"
        rel="noreferrer"
        className="ml-2"
      >
        <Image src="./instagram.svg" alt="Instagram" width={24} height={24} />
      </a>
      <a
        href="https://x.com/Evan_pat_lee"
        target="_blank"
        rel="noreferrer"
        className="ml-2"
      >
        <Image src="./twitter.svg" alt="X" width={24} height={24} />
      </a>
    </footer>
  );
}
