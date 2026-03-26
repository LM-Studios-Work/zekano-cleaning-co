import Link from "next/link"
import { PhoneIcon, ChatIcon, CalendarIcon } from "@/components/icons"

export function CTASection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric layout — heavy left, actions right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-foreground sm:text-5xl leading-tight">
              Your space won&apos;t<br />clean itself.
            </h2>
            <p className="mt-4 text-lg lg:text-base text-muted-foreground max-w-md">
              Book online, call, or WhatsApp. First-time customers get 10% off. No pressure — just clean spaces in Johannesburg.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 lg:py-4 text-base lg:text-sm font-bold text-white transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: "#6fbf00" }}
              >
                <CalendarIcon className="h-5 w-5" />
                Book Online
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 lg:py-4 text-base lg:text-sm font-bold text-white transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: "#1A9AD2" }}
              >
                <ChatIcon className="h-5 w-5" />
                Get a Free Quote
              </Link>
              <a
                href="tel:+27844020733"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 lg:py-4 text-base lg:text-sm font-bold transition-colors duration-200 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background"
              >
                <PhoneIcon className="h-5 w-5" />
                Call 084 402 0733
              </a>
            </div>
            <p className="mt-5 text-xs lg:text-[10px] text-muted-foreground uppercase tracking-wider text-center lg:text-left">
              Free estimates &bull; No hidden fees &bull; No contracts &bull; 10% off first clean
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
