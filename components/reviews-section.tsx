"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ExternalLink, MapPin, CheckCircle2 } from "lucide-react"

export interface Review {
  id: number
  name: string
  reviewCount: number | null
  date: string
  rating: number
  location?: string
  avatarColor: string
  isNew?: boolean
  text: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ellency Sibutha",
    reviewCount: 1,
    date: "Recent",
    rating: 5,
    location: "Sandown, Sandton",
    avatarColor: "#8E24AA",
    isNew: true,
    text: "Very impressed with the weekly cleaning service from Zenako Cleaning & Property Services in Sandown, Sandton. The service is professional, reliable and thorough, and the home is left looking fresh and spotless every week. I’m extremely happy with the service and highly recommend Zenako!",
  },
  {
    id: 2,
    name: "Tonny Ndlovu",
    reviewCount: 1,
    date: "Recent",
    rating: 5,
    location: "Johannesburg",
    avatarColor: "#00897B",
    isNew: true,
    text: "Booked Zenako Cleaning Co. for a full spring clean and was very impressed with the results. The team was punctual, thorough and paid attention to all the small details. My home looked spotless afterwards.",
  },
  {
    id: 3,
    name: "Vasenthee Sabapathy",
    reviewCount: 1,
    date: "Recent",
    rating: 5,
    location: "Northwold",
    avatarColor: "#E65100",
    isNew: true,
    text: "I recently used Zenako Cleaning Co for a full deep clean of my home in Northwold, including carpet steam cleaning, couch steam cleaning, curtain cleaning, ironing, and a complete top-to-bottom deep clean. I am extremely impressed with the quality of service. The team was punctual, professional, friendly, and paid attention to every detail. My home looked and smelled amazing when they were finished. I highly recommend Zenako Cleaning Co to anyone looking for reliable, thorough, and professional cleaning services. Thank you for an outstanding job!",
  },
  {
    id: 4,
    name: "A Google user",
    reviewCount: null,
    date: "1 week ago",
    rating: 5,
    location: "Johannesburg",
    avatarColor: "#1A9AD2",
    isNew: false,
    text: "I tried Zenako Cleaning for the first time last week Thursday for a standard house cleaning, and it was an excellent experience. The booking process was quick and hassle-free, making the whole thing very easy to manage.\n\nMy house was left spotless, and I can honestly say their staff provided the best service experience I have encountered in Johannesburg. They were professional, thorough, and did an amazing job from start to finish.\n\nI'll definitely be using Zenako Cleaning again. I highly recommend them to anyone looking for convenient and trustworthy cleaning services!",
  },
  {
    id: 5,
    name: "Kayshree Naidoo",
    reviewCount: 1,
    date: "1 week ago",
    rating: 5,
    location: "Sandton",
    avatarColor: "#3949AB",
    isNew: false,
    text: "Very happy with the service from Zenako Cleaning & Property Services. They did a deep clean of our house in Sandton and were professional and reliable.",
  },
  {
    id: 6,
    name: "Neeran Dehaloo",
    reviewCount: 3,
    date: "1 week ago",
    rating: 5,
    location: "Bryanston",
    avatarColor: "#2E7D32",
    isNew: false,
    text: "Zenako Cleaning & Property Services cleaned our house in Bryanston and did an excellent job. They were friendly, professional and very reliable.",
  },
]

function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC04" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill={i < rating ? "#FBBC04" : "#e0e0e0"} aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <article className="bg-white rounded-2xl border border-gray-200/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-all duration-300 p-5 md:p-6 flex flex-col justify-between h-full">
      {/* Top Section */}
      <div>
        {/* Card Header: Avatar + Name + Meta + Google Icon */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3 min-w-0">
            {/* Initials avatar */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 select-none shadow-xs"
              style={{ backgroundColor: review.avatarColor }}
              aria-hidden="true"
            >
              {initials}
            </div>

            <div className="min-w-0">
              <h3 className="text-[15px] font-semibold text-gray-900 leading-snug truncate">
                {review.name}
              </h3>
              <p className="text-xs text-gray-500 leading-snug mt-0.5 flex items-center gap-1.5 flex-wrap">
                {review.reviewCount !== null && (
                  <span>
                    {review.reviewCount} review{review.reviewCount !== 1 ? "s" : ""} ·{" "}
                  </span>
                )}
                <span>{review.date}</span>
                {review.isNew && (
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    New
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="shrink-0 p-1 rounded-full bg-gray-50 border border-gray-100" title="Google Review">
            <GoogleGIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Stars */}
        <div className="mb-3 flex items-center gap-2">
          <StarRating rating={review.rating} />
          <span className="text-xs font-bold text-gray-700">5.0</span>
        </div>

        {/* Review text without cutoff */}
        <p className="text-[14px] text-gray-700 leading-relaxed whitespace-pre-line">
          {review.text}
        </p>
      </div>

      {/* Card Footer: Location & Verified Pill */}
      <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 gap-2">
        {review.location ? (
          <span className="inline-flex items-center gap-1 font-medium text-gray-600 truncate">
            <MapPin className="w-3.5 h-3.5 text-[#1A9AD2] shrink-0" />
            <span className="truncate">{review.location}</span>
          </span>
        ) : (
          <span className="text-gray-400">Johannesburg</span>
        )}
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#1A9AD2] shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#1A9AD2]" />
          Verified Google Review
        </span>
      </div>
    </article>
  )
}

const INITIAL_VISIBLE_COUNT = 3

export function ReviewsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const visibleReviews = isExpanded ? reviews : reviews.slice(0, INITIAL_VISIBLE_COUNT)
  const hiddenCount = reviews.length - INITIAL_VISIBLE_COUNT

  const handleToggle = () => {
    if (isExpanded) {
      setIsExpanded(false)
      // Smoothly contract back to reviews header
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top, behavior: "smooth" })
      }
    } else {
      setIsExpanded(true)
    }
  }

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-[#f8f9fa] border-y border-gray-200/70 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <Link
            href="https://share.google/jLQESscLkIi9xGnXp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-center gap-1 text-2xl md:text-3xl tracking-widest text-[#FBBC04] mb-2" aria-hidden="true">
              ★★★★★
            </div>
            <div className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#1A9AD2] transition-colors flex items-center gap-2.5">
              <GoogleGIcon className="w-6 h-6" />
              5-Star Rated on Google
            </div>
            <p className="mt-1.5 text-xs md:text-sm text-gray-500 font-medium max-w-lg">
              Verified client reviews for home, spring clean & commercial property services across Johannesburg
            </p>
          </Link>
        </div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {visibleReviews.map((review) => (
            <div key={review.id} className="h-full">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Expansion / Collapse Controls */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleToggle}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white text-gray-800 border border-gray-300 shadow-xs hover:border-[#1A9AD2] hover:text-[#1A9AD2] hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <span>Show Fewer Reviews</span>
                <ChevronUp className="w-4 h-4 text-[#1A9AD2]" />
              </>
            ) : (
              <>
                <span>View More Reviews ({hiddenCount} more)</span>
                <ChevronDown className="w-4 h-4 text-[#1A9AD2]" />
              </>
            )}
          </button>

          <Link
            href="https://share.google/jLQESscLkIi9xGnXp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#1A9AD2] hover:text-blue-700 hover:bg-blue-50/70 transition-colors"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>Read all reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </Link>
        </div>
      </div>
    </section>
  )
}
