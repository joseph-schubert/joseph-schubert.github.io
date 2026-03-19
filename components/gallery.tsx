"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-M1kJNupCKJAxgPwDEesu6oosK79beK.jpg",
    alt: "Jumping spider with blue-green eyes on bark",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-5tlCEydNHercoXkkMmBJJLZjjVAnIQ.jpg",
    alt: "Jumping spider with blue-green eyes and red leg markings",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-R8OJfl5l4uwnYQ96aRFa4bP6YFJzJS.jpg",
    alt: "Peacock spider displaying colorful orange, blue, and green fan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-dwgLd5PNAbdy7YLPluIRLzQgHsBukm.jpg",
    alt: "Peacock spider with teal fan displaying on bark",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-5neYZUhdsjA4eEudGc1fOAYMWDuB20.jpg",
    alt: "Peacock spider with blue and red patterned fan",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-ya0bv1oZtZOvf4lcojS1k0NIFc7VlW.jpg",
    alt: "Jumping spider with blue face on seed pod",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="aspect-square relative overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
