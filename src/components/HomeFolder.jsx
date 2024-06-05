"use client";

import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFolder({ props }) {
  return (
    <Link href={props.link}>
      <button className="relative rounded hover:scale-105 transition duration-500 ease-in-out">
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
        <Image src={props.url} alt={props.alt} width={300} height={200} />
        <h1 className="text-4xl font-beaufort font-extrabold absolute inset-0 flex items-end p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          {props.name}
        </h1>
      </button>
    </Link>
  );
}
