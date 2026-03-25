import Link from "next/link"
import { Gift } from "lucide-react"

export function FirstTimeOffer() {
  return (
    <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                First-Time Customer? Get 10% Off!
              </h2>
              <p className="mt-1 text-white/85 text-sm lg:text-base">
                Book your first cleaning service with Zenako Cleaning Co. and enjoy 10% off. Plus, get a free quote with no obligation.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              Book Now &amp; Save 10%
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
