"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const CHAR_LIMIT = 160

const reviews = [
  {
    id: 1,
    name: "A Google user",
    reviewCount: null,
    date: "4 days ago",
    rating: 5,
    text: "I tried Zenako Cleaning for the first time last week Thursday for a standard house cleaning, and it was an excellent experience. The booking process was quick and hassle-free, making the whole thing very easy to manage.\n\nMy house was left spotless, and I can honestly say their staff provided the best service experience I have encountered in Johannesburg. They were professional, thorough, and did an amazing job from start to finish.\n\nI'll definitely be using Zenako Cleaning again. I highly recommend them to anyone looking for a convenient and trustworthy cleaning service!",
  },
  {
    id: 2,
    name: "Kayshree Naidoo",
    reviewCount: 1,
    date: "5 days ago",
    rating: 5,
    text: "Very happy with the service from Zenako Cleaning Co. They did a deep clean of our house in Sandton and were professional and reliable.",
  },
  {
    id: 3,
    name: "Neeran Dehaloo",
    reviewCount: 3,
    date: "5 days ago",
    rating: 5,
    text: "Zenako Cleaning Co. cleaned our house in Bryanston and did an excellent job. They were friendly, professional and very reliable.",
  },
]

function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-px" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill={i < rating ? "#FBBC04" : "#e0e0e0"} aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > CHAR_LIMIT
  const displayText =
    isLong && !expanded ? review.text.slice(0, CHAR_LIMIT).trimEnd() + "…" : review.text

  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
      {/* Card header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Initial avatar */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 select-none"
            style={{ backgroundColor: "#1A9AD2" }}
            aria-hidden="true"
          >
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-900 leading-snug truncate">{review.name}</p>
            <p className="text-xs text-gray-500 leading-snug mt-0.5">
              {review.reviewCount !== null
                ? `${review.reviewCount} review${review.reviewCount !== 1 ? "s" : ""} · `
                : ""}
              {review.date}
              <span className="ml-1.5 text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
                New
              </span>
            </p>
          </div>
        </div>
        <div className="shrink-0 mt-0.5">
          <GoogleGIcon />
        </div>
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <p className="mt-2 text-sm text-gray-700 leading-relaxed whitespace-pre-line">{displayText}</p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-sm font-medium hover:underline focus:outline-none"
          style={{ color: "#1A9AD2" }}
          aria-expanded={expanded}
        >
          {expanded ? "Less" : "More"}
        </button>
      )}
    </div>
  )
}

export function MobileReviewsSection() {
  return (
    <section className="lg:hidden py-10 bg-[#f8f9fa]">
      <div className="mx-auto max-w-xl px-5">
        {/* Google Reviews badge image */}
        <Link
          href="https://share.google/jLQESscLkIi9xGnXp"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src="/google-reviews-1-.png"
            alt="Google Reviews – Zenako Cleaning Co."
            width={1200}
            height={300}
            className="w-full h-auto"
          />
        </Link>

        {/* Link to Google Business Profile */}
        <div className="flex justify-center mt-3 mb-7">
          <Link
            href="https://share.google/jLQESscLkIi9xGnXp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1A9AD2] underline underline-offset-2 hover:text-blue-700 transition-colors"
          >
            <GoogleGIcon className="w-4 h-4" />
            See our reviews on Google Business Profile
          </Link>
        </div>

        {/* Google-style review cards */}
        <div className="flex flex-col gap-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
