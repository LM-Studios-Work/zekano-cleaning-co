import Link from "next/link"
import { Phone, Calendar, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ready for a <span style={{ color: "#6fbf00" }}>Spotless</span> Space?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book your cleaning today and experience the Zenako Cleaning Co. difference. Professional cleaning services in Johannesburg — we bring the right team, the right products, and the attention to detail your space deserves.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-medium text-white transition-colors duration-200"
              style={{ backgroundColor: "#6fbf00" }}
            >
              <Calendar className="h-5 w-5" />
              Book Online
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-medium transition-colors duration-200 text-white"
              style={{ backgroundColor: "#1A9AD2" }}
            >
              <MessageSquare className="h-5 w-5" />
              Get a Free Quote
            </Link>
            <a
              href="tel:+27844020733"
              className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-medium transition-colors duration-200 border border-gray-300 text-foreground hover:bg-gray-50"
            >
              <Phone className="h-5 w-5" />
              Call 084 402 0733
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free estimates &bull; No hidden fees &bull; Satisfaction guaranteed &bull; 10% off your first clean
          </p>
        </div>
      </div>
    </section>
  )
}
