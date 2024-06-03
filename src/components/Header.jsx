"use client";

import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-8 mt-8 ml-24 mr-24">
      <Link href="/">
        <h1 className="text-6xl font-beaufort font-extrabold cursor-pointer">
          E. P. Lee
        </h1>
      </Link>
      <div className="flex gap-8">
        <Link href="/about">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer">
            About
          </h2>
        </Link>
        <Link href="/contact">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer">
            Contact Me
          </h2>
        </Link>
      </div>
    </header>
  );
}
