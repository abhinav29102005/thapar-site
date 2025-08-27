"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const campusImages = [
  {
    src: "/images/campus-1.png",
    alt: "Modern red-brick academic buildings with contemporary architecture",
    title: "Academic Excellence",
    description: "State-of-the-art facilities designed for innovation",
  },
  {
    src: "/images/campus-2.png",
    alt: "Thapar campus buildings showcasing geometric design and modern facilities",
    title: "Architectural Marvel",
    description: "Contemporary design meets functional excellence",
  },
  {
    src: "/images/campus-3.png",
    alt: "State-of-the-art library interior with multi-level study spaces",
    title: "Learning Spaces",
    description: "Modern library with collaborative study environments",
  },
  {
    src: "/images/campus-4.png",
    alt: "Academic building with distinctive red-brick facade and modern amenities",
    title: "Engineering Hub",
    description: "Advanced laboratories and research facilities",
  },
  {
    src: "/images/campus-5.png",
    alt: "Campus plaza with students enjoying outdoor spaces and modern architecture",
    title: "Campus Life",
    description: "Vibrant community spaces for student interaction",
  },
]

export default function CampusCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % campusImages.length)
      }, 4000)

      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <div
      className="relative h-[500px] overflow-hidden bg-gray-900 shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {campusImages.map((image, index) => (
          <div key={index} className="min-w-full h-full relative group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index === 0}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-3 text-balance opacity-90 hover:opacity-100 transition-opacity">
                  {image.title}
                </h2>
                <p className="text-xl text-gray-200 font-light text-pretty opacity-80 hover:opacity-100 transition-opacity">
                  {image.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
        onClick={() => setCurrentIndex((currentIndex - 1 + campusImages.length) % campusImages.length)}
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-red-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 group"
        onClick={() => setCurrentIndex((currentIndex + 1) % campusImages.length)}
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6 text-white group-hover:text-red-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {campusImages.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-300 rounded-full hover:scale-125 ${
              index === currentIndex ? "w-8 h-3 bg-white shadow-lg" : "w-3 h-3 bg-white/60 hover:bg-white/80"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-600/20 to-transparent" />
    </div>
  )
}
