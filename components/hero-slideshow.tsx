"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Sparkles } from "lucide-react"

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-medium">Professional Cleaning Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl leading-tight text-balance">
              A Cleaner Home, A Happier Life
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
              Experience the difference professional cleaning makes. From deep cleaning to regular maintenance, we bring sparkle to every corner of your space.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="text-base">
                <Link href="/book">
                  Book Your Cleaning
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary-foreground" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
