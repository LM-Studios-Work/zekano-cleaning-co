import Link from "next/link"
import Image from "next/image"

export function GoogleReviewsCTA() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link 
          href="https://share.google/jLQESscLkIi9xGnXp" 
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48 lg:h-64 w-full">
            <Image
              src="/cleaning images/zenako-house-cleaning-johannesburg.webp"
              alt="Google Reviews - Read our 5-star customer reviews"
              fill
              className="object-cover"
            />
            {/* Overlay with call-to-action */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors duration-300">
              <div className="text-center text-white">
                <p className="text-lg lg:text-xl font-bold">⭐ Read Our Google Reviews</p>
                <p className="text-sm lg:text-base mt-2 opacity-90">See what our customers are saying</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
