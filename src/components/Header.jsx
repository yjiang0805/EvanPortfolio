"use client";

import Link from "next/link";
import "@/app/globals.css";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-4 mt-4 px-4 md:px-24">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center w-full">
        <h1 className="text-4xl font-beaufort font-extrabold">E. P. Lee</h1>
        <button
          className="text-xl font-bold p-2 rounded hover:bg-black hover:text-white transition duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Links */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center gap-4 md:gap-8 mt-4 md:mt-0 w-full md:w-auto`}
      >
        <Link href="/" onClick={closeMenu}>
          <h1 className="hidden md:block text-6xl font-beaufort font-extrabold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-2 md:p-4 rounded-xl">
            E. P. Lee
          </h1>
        </Link>
        <Link href="/paintings" onClick={closeMenu}>
          <h2 className="text-xl md:text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-2 md:p-4 rounded-xl">
            Paintings
          </h2>
        </Link>
        <Link href="/concepts" onClick={closeMenu}>
          <h2 className="text-xl md:text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-2 md:p-4 rounded-xl">
            Concepts
          </h2>
        </Link>
        <Link href="/digital" onClick={closeMenu}>
          <h2 className="text-xl md:text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-2 md:p-4 rounded-xl">
            Digitals
          </h2>
        </Link>
        <Link href="/thesis" onClick={closeMenu}>
          <h2 className="text-xl md:text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-2 md:p-4 rounded-xl">
            Thesis
          </h2>
        </Link>
        <Link href="/about" onClick={closeMenu}>
          <h2 className="text-xl md:text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-2 md:p-4 rounded-xl">
            About
          </h2>
        </Link>
      </div>
    </header>
  );
}
