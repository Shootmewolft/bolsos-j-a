"use client"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem } from "../ui"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import { Image as ImageType } from "@/models"

interface Props {
  className?: string
  images: ImageType[]
}

export function CarouselProduct({ images, className }: Props) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
  return (
    <Carousel
      plugins={[plugin.current]}
      className={`relative ${className} bg-secondary rounded-lg`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className="flex justify-center h-full" key={image.id}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image.url}`}
              alt={image.name}
              width={500}
              height={505}
              className="object-contain aspect-video w-full max-sm:h-[25dvh] md:h-full"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
