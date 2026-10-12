"use client"

import Image from "next/image"
import { useState } from "react"

export type BeforeAfterExample = {
  label: string
  before?: string
  after?: string
  image?: string
}

const ITEMS = [
  {
    label: "Kitchen",
    image: "/home page before and after/Kitchen Cleaning_ Before and After.webp",
    alt: "Kitchen cleaning before and after",
    width: 1983,
    height: 793,
  },
  {
    label: "Living Room",
    image: "/home page before and after/Living Room Before and After.webp",
    alt: "Living room before and after",
    width: 2025,
    height: 776,
  },
  {
    label: "Shower and Tiles",
    image: "/home page before and after/Shower Before and After.webp",
    alt: "Shower and tiles before and after",
    width: 1481,
    height: 1062,
  },
]

export function BeforeAfter({
  examples: _unusedPropExamples,
}: {
  examples?: BeforeAfterExample[]
} = {}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = ITEMS[activeIndex]

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-10 gap-4">
          <div className="max-w-md">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>
              Our Standard
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              The Zenako Standard
            </h2>
            <p className="mt-2 text-base lg:text-sm text-muted-foreground">
              We don&apos;t just wipe surfaces; we clean with care and attention to detail. Here&apos;s the standard you can expect from every visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ITEMS.map((item, idx) => (
              <button
                key={item.label}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-3 sm:px-4 sm:py-2 text-base sm:text-sm font-bold transition-colors ${
                  idx === activeIndex
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden border border-border bg-card">
          <Image
            key={current.image}
            src={current.image}
            alt={current.alt}
            width={current.width}
            height={current.height}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}


