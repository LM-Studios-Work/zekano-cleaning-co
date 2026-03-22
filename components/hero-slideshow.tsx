"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Phone } from "lucide-react"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    alt: "Professional cleaner wiping kitchen counter",
  },
  {
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80",
    alt: "Person mopping hardwood floors",
  },
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&q=80",
    alt: "Cleaning supplies and equipment",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    alt: "Team of professional cleaners",
  },
  {
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80",
    alt: "Sparkling clean living room",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Slideshow Background */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
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

      {/* Light overlay - just enough to make text readable */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/85">
              Welcome to Our Site
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
              The Best Help in<br />
              <span style={{ color: "#6fbf00" }}>Cleaning</span> the House
            </h1>
            <p className="mt-6 text-base text-white/80 leading-relaxed max-w-lg font-normal">
              Experience the difference professional cleaning makes. From deep cleaning to regular maintenance, we bring sparkle to every corner of your space.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* White outline button */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-medium text-white border border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Read More
              </Link>
              {/* Green solid button */}
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-medium text-white transition-colors duration-200"
              >
                Contact Us
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hotline Information Box - Positioned to Extend Beyond Hero */}
      <div className="absolute right-6 lg:right-8 bottom-16 lg:bottom-32 z-30 bg-blue-500 rounded-lg p-6 shadow-2xl w-72 lg:w-80">
        <p className="text-white text-xs uppercase tracking-widest font-bold mb-3">Get Information:</p>
        <a href="tel:+18005632240" className="flex items-center gap-3 text-white hover:text-blue-100 transition-colors">
          <Phone className="h-6 w-6 flex-shrink-0" />
          <span className="text-2xl font-bold">8 800 563 2240</span>
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
