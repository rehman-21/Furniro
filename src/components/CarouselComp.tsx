import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

import Blue from "../assets/ProductImg/BadroomDes.jpg"
import Grifo from "../assets/ProductImg/Grifo.jpg"
import Lolite from "../assets/ProductImg/Lolite.jpg"
import Pingky from "../assets/ProductImg/Pingky.jpg"

const images = [Blue, Grifo, Lolite, Pingky]

export const ImageCarousel = () => {
  const [api, setApi] = React.useState<any>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="w-full h-screen max-w-[1920px] max-h-[1080px] mx-auto">
      <Carousel className="relative w-full h-full" setApi={setApi}>
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-[calc(100vh-90px)] rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md border-none rounded-full p-3" />
        <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md border-none rounded-full p-3" />
      </Carousel>

      <div className="flex justify-start space-x-4">
        {images.map((_, i) => (
          <div
            key={i}
            className={`border transition rounded-full w-6 h-6 flex justify-center items-center ${
              selectedIndex === i ? "border-yellow-500" : "border-gray-300"
            }`}
          >
            <button
              onClick={() => api && api.scrollTo(i)}
              className={`w-3 h-3 rounded-full transition ${
                selectedIndex === i ? "bg-yellow-500" : "bg-gray-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
