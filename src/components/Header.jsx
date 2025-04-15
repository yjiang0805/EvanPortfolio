"use client";

import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-4 mt-4 ml-24 mr-24">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-6xl font-beaufort font-extrabold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-4 rounded-xl">
            E. P. Lee
          </h1>
        </Link>
        <Link href="/paintings">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-4 rounded-xl">
            Paintings
          </h2>
        </Link>
        <Link href="/concepts">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-4 rounded-xl">
            Concepts
          </h2>
        </Link>
        <Link href="/digital">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-4 rounded-xl">
            Digitals
          </h2>
        </Link>
        <Link href="/thesis">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-4 rounded-xl">
            Thesis
          </h2>
        </Link>
      </div>
      <div className="flex gap-8">
        <Link href="/about">
          <h2 className="text-3xl font-beaufort font-bold cursor-pointer transition duration-500 ease-in-out hover:bg-black hover:text-white p-4 rounded-xl">
            About
          </h2>
        </Link>
      </div>
    </header>
  );
}
