"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80",
    alt: "Professional house cleaning",
    label: "01. Clean House",
    heading: "Cleaning\nServices",
    description: "Professional residential cleaning that makes your home sparkle. From deep cleaning to regular upkeep, we handle it all.",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    alt: "Professional carpet cleaning",
    label: "02. Clean Carpet",
    heading: "Clean Carpet a\nPledge of Comfort",
    description: "Expert carpet cleaning that removes deep stains, allergens, and odours. Your carpets will look and feel brand new.",
  },
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&q=80",
    alt: "Professional office cleaning",
    label: "03. Clean Office",
    heading: "Spotless Office\nEnvironment",
    description: "Keep your workplace pristine and professional. We provide thorough commercial cleaning tailored to your schedule.",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isAnimating) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 800)
  }, [currentSlide, isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % slides.length
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
    <section className="relative h-[75vh] md:h-screen min-h-[500px] md:min-h-[600px] w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/35" />

      {/* Content - Left aligned like ClenGo */}
      <div className="relative z-10 flex h-full items-center pt-20 md:pt-0">
        <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
          <div className="max-w-2xl">
            <p
              className={`mb-4 text-sm font-medium uppercase tracking-widest text-white/85 transition-all duration-700 ${
                true ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Welcome to Our Site
            </p>

            {/* Animated heading */}
            <div className="overflow-hidden">
              <h1
                key={currentSlide}
                className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1] animate-slideUp"
              >
                {slides[currentSlide].heading.split("\n").map((line, i) => (
                  <span key={i}>
                    {i === 0 && line.includes("Cleaning") ? (
                      <>
                        <span style={{ color: "#6fbf00" }}>Cleaning</span>
                        {line.replace("Cleaning", "")}
                      </>
                    ) : i === 0 && line.includes("Clean") ? (
                      <>
                        <span style={{ color: "#6fbf00" }}>Clean</span>
                        {line.replace("Clean", "")}
                      </>
                    ) : i === 0 && line.includes("Spotless") ? (
                      <>
                        <span style={{ color: "#6fbf00" }}>Spotless</span>
                        {line.replace("Spotless", "")}
                      </>
                    ) : (
                      line
                    )}
                    {i < slides[currentSlide].heading.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h1>
            </div>

            {/* Animated description */}
            <p
              key={`desc-${currentSlide}`}
              className="mt-6 text-base text-white/80 leading-relaxed max-w-lg font-normal animate-fadeIn"
            >
              {slides[currentSlide].description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Read More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200"
                style={{ backgroundColor: "#6fbf00" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hotline Information Box - hidden on mobile, shown on desktop inside hero */}
      <div className="hidden md:block absolute right-6 lg:right-8 bottom-16 lg:bottom-32 z-30 rounded-lg p-6 shadow-2xl w-72 lg:w-80" style={{ backgroundColor: "#1A9AD2" }}>
        <p className="text-white text-xs uppercase tracking-widest font-bold mb-3">Get Information:</p>
        <a href="tel:+27844020733" className="flex items-center gap-3 text-white hover:text-blue-100 transition-colors">
          <Phone className="h-6 w-6 flex-shrink-0" />
          <span className="text-2xl font-bold">084 402 0733</span>
        </a>
      </div>

      {/* Slide Tab Navigation - Bottom of hero like ClenGo, hidden on mobile */}
      <div className="hidden md:block absolute bottom-[5%] left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-0">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative pr-16 py-5 text-sm font-medium transition-all duration-300 text-left whitespace-nowrap ${
                  index === currentSlide
                    ? "text-white"
                    : "text-white/50 hover:text-white/70"
                }`}
              >
                {slide.label}
                {/* Active underline - fixed short width */}
                <span className={`absolute bottom-0 left-0 w-24 h-0.5 transition-colors duration-300 ${index === currentSlide ? "bg-white" : "bg-white/20"}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
    </section>

    {/* Mobile Hotline Box - Below hero, visible on mobile only */}
    <div className="md:hidden relative z-20 -mt-6 mx-[8%]">
      <div className="rounded-xl p-5 text-center shadow-xl" style={{ backgroundColor: "#1A9AD2" }}>
        <p className="text-white/80 text-xs uppercase tracking-widest font-bold mb-1">Hotline</p>
        <p className="text-white text-base font-bold mb-2">Get Information:</p>
        <a href="tel:+27844020733" className="inline-flex items-center gap-3 text-white">
          <Phone className="h-7 w-7" />
          <span className="text-2xl font-bold">084 402 0733</span>
        </a>
      </div>
    </div>
    </>
  )
}
