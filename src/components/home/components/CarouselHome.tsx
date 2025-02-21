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
import { Product } from "@/models";
import { useFetching } from "@/hooks";
import { URL_FETCHING_STRAPI } from "@/constants";

interface Props {
  className?: string;
}
export function CarouselHome({ className }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const { data, error } = useFetching<Product>(
    URL_FETCHING_STRAPI.HOME_CARROUSEL
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`relative ${className}`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
          {error && <p>{error.message}</p>}
        <CarouselItem className="h-full">
          <Image
            src="/banner.png"
            alt={"Bolsos J&A"}
            width={1980}
            height={485}
            className="object-cover w-screen h-full"
          />
        </CarouselItem>
        {data &&
          data.data.images.map((image) => (
            <CarouselItem key={image.id} className="h-full">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image.url}`}
                alt={image.name}
                width={1980}
                height={485}
                className="object-cover w-screen h-full"
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="top-1/2 left-3" />
      <CarouselNext className="top-1/2 right-3" />
    </Carousel>
  );
}
