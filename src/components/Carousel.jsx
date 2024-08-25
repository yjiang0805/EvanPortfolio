"use client";

import "@/app/globals.css";
import React, { useCallback } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel(props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

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
      <div className="embla">
        <div className="embla__viewport h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {props.imageSources.map((src, index) => (
              <div
                className="embla__slide flex items-center justify-center"
                key={index}
              >
                <Image
                  src={src}
                  alt={props.title + " " + index}
                  width={600}
                  height={400}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
