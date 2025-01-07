"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Props {
  className?: string;
}
export function CarouselHome({ className }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`relative ${className}`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index} className="h-full">
            <Image
              src={`/images-${index + 1}.webp`}
              alt="Colecciones recientes en Bolsos J&A"
              width={1980}
              height={405}
              className="object-cover w-screen h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious style={{ left: "10px", top: "50%" }} />
      <CarouselNext style={{ right: "10px", top: "50%" }} />
    </Carousel>
  );
}
