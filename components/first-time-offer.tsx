import Link from "next/link"
import { GiftIcon } from "@/components/icons"

export function FirstTimeOffer() {
  return (
    <section className="py-0" style={{ backgroundColor: "#1A9AD2" }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 py-10 lg:py-8">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <GiftIcon className="h-12 w-12 lg:h-10 lg:w-10 text-white shrink-0 hidden lg:block" />
            <div>
              <GiftIcon className="h-10 w-10 text-white mx-auto mb-3 lg:hidden" />
              <p className="text-xl lg:text-xl font-black text-white">
                10% off your first clean.
              </p>
              <p className="text-white/80 text-sm lg:text-xs mt-1">
                Available to new customers. No code required — simply mention it when booking.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/book"
              className="px-8 py-4 sm:py-3 text-base sm:text-sm font-bold text-white hover:opacity-90 transition-colors text-center"
              style={{ backgroundColor: "#6fbf00" }}
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 sm:py-3 text-base sm:text-sm font-bold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
