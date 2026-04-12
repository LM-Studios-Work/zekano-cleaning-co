"use client"

import Image from "next/image"
import { useState } from "react"

const examples = [
  {
    label: "Kitchen",
    before: "/cleaning images/zenako-kitchen-cleaning-before-after.webp",
    after: "/cleaning images/zenako-kitchen-cleaning.webp",
  },
  {
    label: "Bathroom",
    before: "/home page before and after/bathroom left.jpg",
    after: "/home page before and after/bathroom right.jpg",
  },
  {
    label: "Living Room",
    before: "/home page before and after/living room before.webp",
    after: "/home page before and after/living room after.webp",
  },
]

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric layout - text left, tabs right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-10 gap-4">
          <div className="max-w-md">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Our Standard</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              The Zenako Standard
            </h2>
            <p className="mt-2 text-base lg:text-sm text-muted-foreground">
              We don&apos;t just wipe surfaces; we restore them. Here is the level of detail you can expect from every visit.
            </p>
          </div>
          <div className="flex gap-2">
            {examples.map((ex, idx) => (
              <button
                key={ex.label}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-3 sm:px-4 sm:py-2 text-base sm:text-sm font-bold transition-colors ${
                  idx === activeIndex
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {ex.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="relative">
            <span className="absolute top-4 left-4 z-10 bg-black/70 text-white text-sm sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 sm:py-1">Before</span>
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={examples[activeIndex].before}
                alt={`Before - ${examples[activeIndex].label}`}
                fill
                className="object-cover grayscale contrast-125"
              />
            </div>
          </div>
          <div className="relative">
            <span className="absolute top-4 left-4 z-10 text-white text-sm sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 sm:py-1" style={{ backgroundColor: "#6fbf00" }}>After</span>
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={examples[activeIndex].after}
                alt={`After - ${examples[activeIndex].label}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
