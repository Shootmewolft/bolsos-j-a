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
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className={`${className} relative`}
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
      <CarouselNext className="absolute right-2" />
      <CarouselPrevious className="absolute left-2" />
    </Carousel>
  );
}
