import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Ready for a <span style={{ color: "#6fbf00" }}>Spotless</span> Space?
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Book your cleaning today and experience the Zekano Cleaning Co difference. First-time customers get 15% off their first cleaning!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/book"
              className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-medium text-white transition-colors duration-200"
              style={{ backgroundColor: "#6fbf00" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5ea800")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6fbf00")}
            >
              <Calendar className="h-5 w-5" />
              Book Online
            </Link>
            <a 
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-medium transition-colors duration-200 border border-gray-300 text-foreground hover:bg-gray-50"
            >
              <Phone className="h-5 w-5" />
              Call (123) 456-7890
            </a>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free estimates • No hidden fees • Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}
