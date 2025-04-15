"use client";

import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFolder({ props }) {
  return (
    <Link href={props.link}>
      <button className="relative rounded hover:scale-105 transition duration-500 ease-in-out w-[150px] sm:w-[200px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
        <div className="relative w-full h-full">
          <Image
            src={props.url}
            alt={props.alt}
            layout="fill"
            className="object-cover rounded"
          />
        </div>
        <h1 className="text-sm sm:text-lg md:text-xl font-beaufort font-extrabold absolute inset-0 flex items-end p-2 md:p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          {props.name}
        </h1>
      </button>
    </Link>
  );
}
