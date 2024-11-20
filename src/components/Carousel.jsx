"use client";

import "@/app/globals.css";
import React, { useCallback } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";

export default function Carousel(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div>
      <h1 className="text-6xl font-beaufort font-extrabold text-center mt-8">
        {props.title}
      </h1>
      <div className="embla mx-auto mt-12 max-w-5xl h-auto">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {props.imageSources.map((src, index) => (
              <div
                className="embla__slide flex items-center justify-center"
                key={index}
              >
                <Image
                  src={src}
                  alt={props.title + " " + index}
                  width={800}
                  height={600}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="bg-black bg-opacity-50 text-white px-4 py-2"
            onClick={scrollPrev}
          >
            Prev
          </button>
          <button
            className="bg-black bg-opacity-50 text-white px-4 py-2"
            onClick={scrollNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
