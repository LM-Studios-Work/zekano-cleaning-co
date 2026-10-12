import Link from "next/link"
import { MapPin, CheckCircle2, ExternalLink } from "lucide-react"

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

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#FBBC04" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  )
}

const compactReviews = [
  {
    name: "Ellency Sibutha",
    initials: "ES",
    color: "#8E24AA",
    location: "Sandown, Sandton",
    text: "Very impressed with the service from Zenako Cleaning & Property Services. Professional, reliable and thorough throughout.",
  },
  {
    name: "Tonny Ndlovu",
    initials: "TN",
    color: "#00897B",
    location: "Johannesburg",
    text: "The team was punctual, thorough and paid attention to all the details. Our property looked neat, clean and well maintained.",
  },
  {
    name: "Kayshree Naidoo",
    initials: "KN",
    color: "#3949AB",
    location: "Sandton",
    text: "Very happy with the service from Zenako. Reliable, professional team and great workmanship on our property.",
  },
]

export function GoogleReviewsCTA() {
  return (
    <section className="py-8 bg-gray-50/60 border-y border-gray-200/60">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 pb-4 border-b border-gray-200/60">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-full bg-white border border-gray-200 shadow-xs">
              <GoogleGIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-sm">5.0 Star Rating</span>
                <StarRating rating={5} />
              </div>
              <p className="text-xs text-gray-500">Verified client reviews across Johannesburg</p>
            </div>
          </div>

          <Link
            href="https://share.google/jLQESscLkIi9xGnXp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline"
            style={{ color: "#1A9AD2" }}
          >
            <span>Read Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Compact Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {compactReviews.map((r, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border border-gray-200/80 p-4 shadow-2xs flex-col justify-between ${
                i > 0 ? "hidden md:flex" : "flex"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900 leading-none">{r.name}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{r.location}</p>
                    </div>
                  </div>
                  <StarRating rating={5} />
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#1A9AD2]" />
                  {r.location.split(",")[0]}
                </span>
                <span className="inline-flex items-center gap-1 text-[#1A9AD2] font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
