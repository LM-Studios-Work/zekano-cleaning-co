import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
            Ready for a Spotless Space?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Book your cleaning today and experience the SparkleClean Pro difference. First-time customers get 15% off their first cleaning!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link href="/book">
                <Calendar className="mr-2 h-5 w-5" />
                Book Online
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-5 w-5" />
                Call (123) 456-7890
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/70">
            Free estimates • No hidden fees • Satisfaction guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}
