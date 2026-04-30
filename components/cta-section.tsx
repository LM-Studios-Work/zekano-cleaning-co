import Link from "next/link"
import { PhoneIcon, ChatIcon, CalendarIcon } from "@/components/icons"

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric layout - heavy left, actions right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-foreground sm:text-5xl leading-tight">
              Ready for a<br />cleaner space?
            </h2>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted-foreground max-w-md">
              Book online, call, or send us a WhatsApp message. First-time customers receive 10% off their initial clean.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3">
              <Link
                href="/book"
                className="btn-lift btn-green-lift inline-flex items-center justify-center gap-3 px-8 py-5 lg:py-4 text-base font-bold text-white"
                style={{ backgroundColor: "#6fbf00" }}
              >
                <CalendarIcon className="h-5 w-5" />
                Book Online
              </Link>

              <a
                href="tel:+27657018482"
                className="btn-lift inline-flex items-center justify-center gap-3 px-8 py-5 lg:py-4 text-base font-bold transition-colors duration-200 border-2 border-foreground text-foreground hover:bg-foreground hover:text-white"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 065 701 8482
              </a>
            </div>
            <p className="mt-5 text-base tracking-wider text-center lg:text-left text-muted-foreground">
              Free estimates &bull; Transparent pricing &bull; No lock-in contracts &bull; 10% off first clean
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
