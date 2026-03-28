import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheckIcon, LeafIcon, GearIcon, TrophyIcon, CheckIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "About Us | Zenako Cleaning Co. | Johannesburg",
  description: "Learn about Zenako Cleaning Co. — Johannesburg's trusted professional cleaning service for homes and businesses. Serving Sandton, Randburg, Fourways, Midrand, Bryanston, and Johannesburg North.",
}

const values = [
  {
    icon: ShieldCheckIcon,
    title: "The Mission",
    description: "Clean spaces across Johannesburg. Do it right. Don't make excuses.",
  },
  {
    icon: LeafIcon,
    title: "The Standards",
    description: "Honest work, same team every visit, eco-friendly products. No shortcuts.",
  },
  {
    icon: GearIcon,
    title: "The People",
    description: "Vetted, trained, equipped. Not randoms with a mop.",
  },
  {
    icon: TrophyIcon,
    title: "The Guarantee",
    description: "Not satisfied? We come back. Free. No forms, no arguing.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title - Simple text, no blue wall */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>About Us</span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Who We <span style={{ color: "#1A9AD2" }}>Are</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              A Johannesburg-based cleaning company built on word-of-mouth referrals and repeat clients who trust us with their spaces.
            </p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Story</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Built from the <span style={{ color: "#6fbf00" }}>Ground Up</span>
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Zenako Cleaning Co. started right here in Johannesburg. What began as a small operation serving a handful of households in the suburbs has grown steadily through referrals and returning clients who value consistency.
                  </p>
                  <p>
                    We saw too many cleaning services that would show up late, cut corners, or send a different person every time. We decided to do things differently — fixed teams, proper training, and the kind of attention to detail that means you notice the difference when you walk through the door.
                  </p>
                  <p>
                    Today we serve homes, offices, and commercial properties across Johannesburg and surrounding areas. Our teams handle everything from weekly upkeep to full deep cleans, move-in turnovers, and post-construction cleanups. The work speaks for itself.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Zenako Cleaning Co. team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What <span style={{ color: "#6fbf00" }}>Drives</span> Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles behind every job we take on
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center border-border">
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}>
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Why Clients <span style={{ color: "#6fbf00" }}>Stick</span> With Us
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Licensed, bonded, and fully insured",
                    "Background-checked, trained staff",
                    "Eco-friendly cleaning products",
                    "Flexible scheduling — weekdays, weekends, after hours",
                    "Satisfaction guarantee on every job",
                    "Same team assigned to your property each visit",
                    "Transparent pricing with no surprises",
                    "Easy online and WhatsApp booking",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckIcon className="h-5 w-5 shrink-0" style={{ color: "#6fbf00" }} />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 mt-8 hover:opacity-90"
                  style={{ backgroundColor: "#6fbf00" }}
                >
                  Book Your Cleaning
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                    alt="Professional cleaning in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
                Ready to See the Difference?
              </h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Get in touch for a free quote or book your first clean online. We'll take it from there.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#6fbf00" }}
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
