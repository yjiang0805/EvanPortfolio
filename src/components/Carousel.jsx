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
      <h1 className="text-4xl md:text-6xl font-beaufort font-extrabold text-center mt-4 md:mt-8">
        {props.title}
      </h1>
      <div className="embla mx-auto mt-8 md:mt-12 max-w-full md:max-w-5xl relative w-full h-[300px] md:w-[800px] md:h-[600px]">
        <div className="embla__viewport w-full h-full" ref={emblaRef}>
          <div className="embla__container w-full h-full">
            {props.imageSources.map((src, index) => (
              <div
                className="embla__slide flex items-center justify-center relative w-full h-full"
                key={index}
              >
                <Image
                  src={src}
                  alt={props.title + " " + index}
                  width={800}
                  height={600}
                  className="object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 mx-auto max-w-full md:max-w-5xl px-4">
        <button
          className="bg-black bg-opacity-50 text-white px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded"
          onClick={scrollPrev}
        >
          Prev
        </button>
        <button
          className="bg-black bg-opacity-50 text-white px-2 py-1 md:px-4 md:py-2 text-sm md:text-base rounded"
          onClick={scrollNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
