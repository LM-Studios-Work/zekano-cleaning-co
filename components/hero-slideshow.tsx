"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneIcon } from "@/components/icons"

export type HeroSlide = {
  image: string
  alt: string
  label: string
  heading: string
  description: string
}

const FALLBACK_SLIDES: HeroSlide[] = [
  {
    image: "/home_page_heros/homes_hero.webp",
    alt: "House cleaning in Johannesburg",
    label: "01. Homes",
    heading: "Professional Home\nCleaning.",
    description: "Every surface, every corner, every room, maintained to a consistent standard your household can rely on.",
  },
  {
    image: "/home_page_heros/specialized services hero.webp",
    alt: "Specialized cleaning services",
    label: "02. Specialized Services",
    heading: "Specialized\nCleaning Services.",
    description: "From post-construction to high-pressure cleaning, we provide professional solutions for your most demanding cleaning needs.",
  },
  {
    image: "/home_page_heros/office.webp",
    alt: "Office cleaning Johannesburg",
    label: "03. Offices",
    heading: "Reliable Commercial\nCleaning.",
    description: "Scheduled after-hours cleaning so your workspace is ready each morning without interrupting your operations.",
  },
]

export function HeroSlideshow({ slides }: { slides?: HeroSlide[] }) {
  const activeSlides = slides && slides.length > 0 ? slides : FALLBACK_SLIDES
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide) return
    setCurrentSlide(index)
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activeSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeSlides.length])

  return (
    <>
    <section className="relative h-[75vh] md:h-screen min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
      {/* Slideshow Background */}
      {activeSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark overlay - high contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - left aligned, no fluff */}
      <div className="relative z-10 flex h-full items-center pt-20 md:pt-0">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
          <div key={currentSlide} className="max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
            <p className="mb-3 text-sm md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Cleaning services in Johannesburg
            </p>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              {activeSlides[currentSlide].heading.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < activeSlides[currentSlide].heading.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-5 text-base md:text-sm text-white/80 leading-relaxed max-w-md">
              {activeSlides[currentSlide].description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="btn-lift btn-green-lift inline-flex items-center justify-center px-8 py-4 sm:py-3.5 text-base sm:text-sm font-bold text-white"
                style={{ backgroundColor: "#6fbf00" }}
              >
                Book a Clean
              </Link>
              <Link
                href="/contact"
                className="btn-lift inline-flex items-center justify-center px-8 py-4 sm:py-3.5 text-base sm:text-sm font-bold text-white border-2 border-white/50 hover:bg-white hover:text-black transition-colors duration-200"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hotline - desktop, bottom-right */}
      <div className="hidden md:block absolute right-6 lg:right-8 bottom-16 lg:bottom-24 z-30 p-5 w-72" style={{ backgroundColor: "#1A9AD2" }}>
        <p className="text-white text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Call now:</p>
        <a href="tel:+27657018482" className="flex items-center gap-3 text-white hover:text-white/80 transition-colors">
          <PhoneIcon className="h-5 w-5 flex-shrink-0" />
          <span className="text-xl font-black">065 701 8482</span>
        </a>
      </div>

      {/* Slide tabs - bottom left */}
      <div className="hidden md:block absolute bottom-[5%] left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-0">
            {activeSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative pr-16 py-4 text-xs font-bold transition-all duration-200 text-left whitespace-nowrap uppercase tracking-wider ${
                  index === currentSlide
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {slide.label}
                <span className={`absolute bottom-0 left-0 w-20 h-0.5 transition-colors duration-200 ${index === currentSlide ? "bg-white" : "bg-white/15"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Mobile hotline - below hero */}
    <div className="md:hidden relative z-20 -mt-6 mx-6">
      <div className="p-5 text-center" style={{ backgroundColor: "#1A9AD2" }}>
        <a href="tel:+27657018482" className="inline-flex items-center gap-3 text-white">
          <PhoneIcon className="h-6 w-6" />
          <span className="text-xl font-black">065 701 8482</span>
        </a>
      </div>
    </div>
    </>
  )
}
