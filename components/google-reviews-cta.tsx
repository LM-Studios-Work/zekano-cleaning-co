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
              src="/google-reviews-1-.png"
              alt="Google Reviews - Zenako Cleaning Co."
              fill
              className="object-cover"
            />
            {/* Overlay with call-to-action */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors duration-300">
              <div className="text-center text-white p-4">
                <p className="text-xl lg:text-2xl font-bold">⭐ Read Our Google Reviews</p>
                <p className="text-base lg:text-lg mt-2 opacity-90 font-medium tracking-wide">Click to see why our clients love Zenako</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
