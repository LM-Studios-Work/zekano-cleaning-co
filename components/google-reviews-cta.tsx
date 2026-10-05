import Link from "next/link"
import Image from "next/image"

export function GoogleReviewsCTA() {
  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="mx-auto max-w-xl px-6 flex flex-col items-center">
        <Image
          src="/google-reviews-1-.png"
          alt="Google Reviews - Zenako Cleaning & Property Services"
          width={1200}
          height={300}
          className="w-full h-auto mb-4"
          priority
        />
        <Link 
          href="https://share.google/jLQESscLkIi9xGnXp" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium hover:underline text-center"
          style={{ color: "#1A9AD2" }}
        >
          Read our Google Reviews
        </Link>
      </div>
    </section>
  )
}
