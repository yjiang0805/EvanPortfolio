"use client";

import "@/app/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeFolder({ props }) {
  return (
    <Link href={props.link}>
      <button className="relative rounded">
        <Image src={props.url} alt={props.alt} width={600} height={200} />
        <h1 className="text-8xl font-beaufort font-extrabold absolute inset-0 flex items-center justify-center text-white">
          {props.name}
        </h1>
      </button>
    </Link>
  );
}
