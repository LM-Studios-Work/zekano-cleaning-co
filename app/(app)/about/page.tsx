import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheckIcon, LeafIcon, GearIcon, TrophyIcon, CheckIcon,
  AwardStarIcon, MoneyBagIcon, RecycleIcon,
} from "@/components/icons"

export const revalidate = 60

export const metadata: Metadata = {
  title: "About Zenako Cleaning Co. | Johannesburg",
  description: "Learn about Zenako Cleaning Co., Johannesburg's trusted professional cleaning service for homes and businesses. Serving Sandton, Randburg, Fourways, Midrand, Bryanston, and Johannesburg North.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Zenako Cleaning Co. | Johannesburg",
    description: "Johannesburg-based cleaning company serving homes, offices, and commercial properties across Sandton, Randburg, Fourways, Midrand, and Bryanston.",
    url: '/about',
    images: [
      {
        url: '/cleaning images/zenako-cleaning-team.webp',
        alt: 'Zenako Cleaning Co. professional cleaning team, Johannesburg',
      },
    ],
  },
  twitter: {
    title: "About Zenako Cleaning Co. | Johannesburg",
    description: "Johannesburg-based cleaning company serving homes, offices, and commercial properties across Sandton, Randburg, Fourways, Midrand, and Bryanston.",
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheckIcon,
  LeafIcon,
  GearIcon,
  TrophyIcon,
  AwardStarIcon,
  MoneyBagIcon,
  RecycleIcon,
}

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })
  const { docs: values } = await payload.find({
    collection: 'company-values',
    where: { section: { equals: 'about' } },
    sort: 'order',
    limit: 20,
  })

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
              A Johannesburg-based cleaning company built on accountability, consistent standards, and clients who return because the work speaks for itself.
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
                  Delivering <span style={{ color: "#6fbf00" }}>Peace of Mind</span> Through Uncompromising Standards
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    At Zenako Cleaning Co., we believe your space should be a source of calm, not another task on your list. We provide professional residential and commercial cleaning services across Johannesburg designed to help busy homeowners, families, and professionals maintain beautifully clean, healthy, and welcoming environments.
                  </p>
                  <p>
                    We didn't set out to be the largest cleaning agency in South Africa. Instead, we set out to be the most reliable. Proudly servicing Sandton, Bryanston, Fourways, Midrand, and Randburg, our team is committed to delivering detail-focused cleaning with a deeply personal touch.
                  </p>
                  <p>
                    We understand that inviting a cleaning company into your home or workspace requires absolute trust. That is why we reject the industry standard of &ldquo;good enough.&rdquo; Instead, we focus on consistency, rigorous professionalism, and clear communication on every single project we take on.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-tr from-[#1A9AD2]/20 to-[#6fbf00]/20">
                  <Image
                    src="/cleaning images/zenako-deep-cleaning.webp"
                    alt="Professional Zenako Cleaner"
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
              {values.map((value: any) => {
                const Icon = iconMap[value.icon] || ShieldCheckIcon
                return (
                  <Card key={value.id} className="text-center border-border">
                    <CardContent className="pt-8 pb-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Why Clients <span style={{ color: "#6fbf00" }}>Return</span> to Us
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    { title: "Professional & Reliable Service", desc: "We arrive on time and deliver exactly what was promised." },
                    { title: "Uncompromising Attention to Detail", desc: "We don't cut corners; we clean them." },
                    { title: "Trusted Cleaning Teams", desc: "Vetted, familiar professionals assigned to your property." },
                    { title: "Flexible Cleaning Solutions", desc: "Tailored schedules for homes, offices, and commercial spaces." },
                    { title: "Premium Equipment & Eco-Friendly Products", desc: "Safe for your family, pets, and the environment." },
                    { title: "Responsive Communication", desc: "No call centres. Direct access to management." },
                    { title: "Commitment to Satisfaction", desc: "If it's not done right, we return and fix it without dispute." },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 mt-0.5 shrink-0" style={{ color: "#6fbf00" }} />
                      <div>
                        <span className="font-bold text-foreground">{item.title}</span>
                        <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                      </div>
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
                    src="/cleaning images/zenako-cleaning-team.webp"
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
