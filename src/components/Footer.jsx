"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center h-16 text-black">
      <p className="text-lg font-spiegel">Follow me on Instagram:</p>
      <a
        href="https://www.instagram.com/neph_enee/"
        target="_blank"
        rel="noreferrer"
        className="ml-2"
      >
        <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
      </a>
    </footer>
  );
}