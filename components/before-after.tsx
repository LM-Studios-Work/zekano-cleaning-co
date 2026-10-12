"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Sparkles, Utensils, Sofa, Droplets, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight } from "lucide-react"

export interface TransformationItem {
  id: string
  label: string
  shortLabel: string
  title: string
  description: string
  image: string
  aspectRatio: string
  highlights: string[]
  serviceHref: string
  serviceName: string
}

const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "kitchen",
    label: "Gourmet Kitchen",
    shortLabel: "Kitchen",
    title: "Kitchen Deep Clean & Degreasing",
    description: "Stubborn grease, countertop clutter, and food residues thoroughly cleared. Surfaces sanitised and polished to a sparkling showroom finish.",
    image: "/home page before and after/Kitchen Cleaning_ Before and After.webp",
    aspectRatio: "aspect-[20/9]",
    highlights: [
      "Heavy grease & residue breakdown",
      "Countertops & splashbacks sanitised",
      "Appliances & fixtures polished",
    ],
    serviceHref: "/services/deep-cleaning",
    serviceName: "Deep Cleaning",
  },
  {
    id: "living-room",
    label: "Living & Lounge",
    shortLabel: "Living Room",
    title: "Living Room Refresh & Detailing",
    description: "Complete tidy, deep vacuuming, dusting of every shelf and ledge, and careful styling to restore warmth, order, and freshness to your lounge.",
    image: "/home page before and after/Living Room Before and After.webp",
    aspectRatio: "aspect-[20/9]",
    highlights: [
      "High & low surface dust removal",
      "Upholstery, cushions & rugs refreshed",
      "Flooring deep-vacuumed & revitalised",
    ],
    serviceHref: "/services/standard-house-cleaning",
    serviceName: "Weekly House Cleaning",
  },
  {
    id: "shower",
    label: "Shower & Bathroom",
    shortLabel: "Shower & Tiles",
    title: "Shower Tile & Grout Restoration",
    description: "Tough limescale, soap scum, and discoloured grout lines eradicated with professional-grade, surface-safe bathroom descalers.",
    image: "/home page before and after/Shower  Before and After.webp",
    aspectRatio: "aspect-[4/3] sm:aspect-[16/11]",
    highlights: [
      "Heavy limescale & soap scum removed",
      "Tile grout scrubbed & restored",
      "Glass screens & chrome polished streak-free",
    ],
    serviceHref: "/services/deep-cleaning",
    serviceName: "Deep Cleaning",
  },
]

export type BeforeAfterExample = {
  label: string
  before: string
  after: string
}

export function BeforeAfter({
  examples: _unusedPropExamples,
}: {
  examples?: BeforeAfterExample[]
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = TRANSFORMATIONS[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TRANSFORMATIONS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TRANSFORMATIONS.length - 1 ? 0 : prev + 1))
  }

  const icons = [
    <Utensils key="kitchen" className="w-4 h-4" />,
    <Sofa key="living" className="w-4 h-4" />,
    <Droplets key="shower" className="w-4 h-4" />,
  ]

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6fbf00]/10 text-[#6fbf00] text-xs font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              The Zenako Standard
            </h2>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">
              We don&apos;t just wipe surfaces; we restore spaces with precision and care. Explore our real before-and-after transformations across Johannesburg homes.
            </p>
          </div>

          {/* Room Selector Tabs */}
          <div className="inline-flex p-1.5 rounded-xl bg-muted/20 border border-border/60 self-start md:self-end">
            {TRANSFORMATIONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  idx === activeIndex
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                }`}
                aria-label={`View ${item.label} transformation`}
              >
                {icons[idx]}
                <span>{item.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Transformation Showcase */}
        <div className="rounded-2xl border border-border/80 bg-neutral-950 shadow-xl overflow-hidden">
          {/* Top Info Bar */}
          <div className="px-5 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6fbf00] animate-pulse" />
              <span className="text-sm font-bold tracking-wide uppercase text-white/90">
                {current.label}
              </span>
              <span className="text-xs text-white/50 hidden sm:inline">•</span>
              <span className="text-xs text-white/60 hidden sm:inline">
                Real Client Results in Johannesburg
              </span>
            </div>

            {/* Next / Prev Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous transformation"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-medium text-white/60 px-2">
                {activeIndex + 1} / {TRANSFORMATIONS.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next transformation"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Transformation Image Viewer */}
          <div className="relative w-full bg-neutral-900 flex items-center justify-center overflow-hidden">
            <div className={`relative w-full ${current.aspectRatio} max-h-[700px]`}>
              <Image
                src={current.image}
                alt={`${current.title} - Before and After comparison`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-contain sm:object-cover"
              />
            </div>
          </div>

          {/* Bottom Details & CTA Bar */}
          <div className="bg-neutral-900/90 border-t border-white/10 p-5 sm:p-6 lg:p-7 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Text Info */}
              <div className="lg:col-span-7 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Highlights & CTA */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4">
                <ul className="space-y-1.5 text-xs text-neutral-300 w-full">
                  {current.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6fbf00] shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 sm:pt-0 w-full sm:w-auto">
                  <Link
                    href={current.serviceHref}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold bg-[#6fbf00] hover:bg-[#62a800] text-white transition-colors shadow-md"
                  >
                    <span>Book {current.serviceName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {TRANSFORMATIONS.map((item, idx) => {
            const isSelected = idx === activeIndex
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`group text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3.5 ${
                  isSelected
                    ? "bg-[#6fbf00]/5 border-[#6fbf00] shadow-sm"
                    : "bg-white border-border/80 hover:border-foreground/30 hover:bg-neutral-50/50"
                }`}
              >
                <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-neutral-900 shrink-0 border border-border/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className={`text-xs font-bold uppercase tracking-wider ${
                      isSelected ? "text-[#6fbf00]" : "text-muted-foreground"
                    }`}>
                      {item.shortLabel}
                    </p>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6fbf00]" />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-foreground truncate mt-0.5">
                    {item.title}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

