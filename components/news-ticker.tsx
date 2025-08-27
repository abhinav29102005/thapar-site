"use client"

import type React from "react"

import { useState, useRef } from "react"

const newsItems = [
  "🎓 Admissions Open for 2024-25 Academic Session - Apply Now!",
  "🏆 Thapar University ranked among Top 50 Engineering Colleges in India",
  "🔬 New Research Center for Artificial Intelligence inaugurated",
  "📚 International Conference on Sustainable Technology scheduled for March 2024",
  "🌟 Student Innovation Challenge 2024 - Registration deadline extended",
  "💼 Campus Placement Drive achieves 95% success rate",
  "🎯 New Liberal Arts & Sciences program launches this fall",
  "🌍 Partnership signed with leading international universities",
]

export default function NewsTicker() {
  const [isHovered, setIsHovered] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [animationStyle, setAnimationStyle] = useState<React.CSSProperties>({})

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      const computedStyle = window.getComputedStyle(scrollRef.current)
      const transform = computedStyle.transform
      setAnimationStyle({
        transform: transform,
        animation: "none",
      })
    }
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setAnimationStyle({})
    setIsHovered(false)
  }

  return (
    <div
      className="bg-red-600 text-white py-2 overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center">
        <div className="bg-red-700 px-4 py-1 text-sm font-semibold whitespace-nowrap">LATEST UPDATES</div>
        <div className="flex-1 overflow-hidden">
          <div
            ref={scrollRef}
            className={`flex whitespace-nowrap ${!isHovered ? "animate-scroll" : ""}`}
            style={isHovered ? animationStyle : {}}
          >
            {/* Duplicate the news items for seamless loop */}
            {[...newsItems, ...newsItems].map((item, index) => (
              <span key={index} className="px-8 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
