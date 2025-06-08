"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const blogItems = [
  {
    image: "/banner1.jpg",
    title: "The Future of AI in Content Creation",
    category: "Technology"
  },
  {
    image: "/banner2.jpg",
    title: "Mastering the Art of Blogging",
    category: "Writing"
  },
  {
    image: "/banner3.jpg",
    title: "SEO Strategies for 2024",
    category: "Marketing"
  },
  {
    image: "/banner4.jpg",
    title: "Building a Personal Brand Online",
    category: "Business"
  },
  {
    image: "/banner5.jpg",
    title: "The Psychology of Viral Content",
    category: "Psychology"
  }
]

export function ImageSlider() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-[100%]"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      orientation="horizontal"
    >
      <CarouselContent>
        {blogItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-[16/6] p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                    <span className="text-sm font-medium text-white/80 mb-1">
                      {item.category}
                    </span>
                    <h2 className="text-2xl font-bold text-white">
                      {item.title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
