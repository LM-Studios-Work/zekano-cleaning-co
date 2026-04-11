import Link from "next/link"
import Image from "next/image"

export function GoogleReviewsCTA() {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <Link 
          href="https://share.google/jLQESscLkIi9xGnXp" 
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/google-reviews-1-.png"
            alt="Google Reviews - Zenako Cleaning Co."
            width={1200}
            height={300}
            className="w-full h-auto"
            priority
          />
        </Link>
      </div>
    </section>
  )
}
