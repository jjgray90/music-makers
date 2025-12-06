"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import type { Image as SanityImage } from "sanity";

interface Props {
  images: SanityImage[];
}

export function ArtistCarousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [thumbEmblaRef, thumbEmblaApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const index = emblaApi.selectedScrollSnap();
    setSelectedIndex(index);
    if (thumbEmblaApi) thumbEmblaApi.scrollTo(index);
  }, [emblaApi, thumbEmblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full mt-6 mb-6 relative">
      {/* MAIN CAROUSEL */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex items-center transition-all duration-500 ease-out">
          {images.map((img, i) => (
            <div
              className="flex-[0_0_100%] relative flex justify-center items-center p-4"
              key={i}
            >
              <Image
                src={urlFor(img)
                  .width(1600)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={`Gallery image ${i + 1}`}
                width={1600}
                height={2400}
                className="
                  w-auto 
                  h-auto 
                  max-h-[450px] 
                  md:max-h-[550px] 
                  object-contain 
                  rounded-xl
                "
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ARROWS */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-black 
        px-3 py-2 rounded-full hover:bg-white transition z-20 cursor-pointer"
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md text-black 
        px-3 py-2 rounded-full hover:bg-white transition z-20 cursor-pointer"
        aria-label="Next"
      >
        ›
      </button>

      {/* THUMBNAILS */}
      <div className="overflow-hidden mt-4" ref={thumbEmblaRef}>
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition 
                ${i === selectedIndex ? "border-black" : "border-transparent"}`}
            >
              <Image
                src={urlFor(img)
                  .width(300)
                  .height(300)
                  .auto("format")
                  .quality(80)
                  .url()}
                alt={`Thumbnail ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
