"use client"

import Image from "next/image"
import { useState } from "react"

const examples = [
  {
    label: "Kitchen Deep Clean",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75",
    after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&q=75",
  },
  {
    label: "Bathroom Restoration",
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=75",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&q=75",
  },
  {
    label: "Living Room Refresh",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    after: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=75",
  },
]

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Results</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Before &amp; <span style={{ color: "#6fbf00" }}>After</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See the difference our professional cleaning services make. Real results from real homes in Johannesburg.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {examples.map((ex, idx) => (
            <button
              key={ex.label}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                idx === activeIndex
                  ? "border-[#6fbf00] text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Before</p>
            <div className="aspect-[4/3] relative overflow-hidden shadow-lg">
              <Image
                src={examples[activeIndex].before}
                alt={`Before - ${examples[activeIndex].label}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#6fbf00" }}>After</p>
            <div className="aspect-[4/3] relative overflow-hidden shadow-lg">
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
