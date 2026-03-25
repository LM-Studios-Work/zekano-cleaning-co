import Link from "next/link"
import { GiftIcon } from "@/components/icons"

export function FirstTimeOffer() {
  return (
    <section className="py-0" style={{ backgroundColor: "#1A9AD2" }}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 py-8">
          <div className="flex items-center gap-4">
            <GiftIcon className="h-10 w-10 text-white shrink-0" />
            <div>
              <p className="text-lg lg:text-xl font-black text-white">
                First clean? Take 10% off.
              </p>
              <p className="text-white/80 text-xs">
                New customers only. No code needed. Just mention it when you book.
              </p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link
              href="/book"
              className="px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-colors"
              style={{ backgroundColor: "#6fbf00" }}
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-bold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
