import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Home, Building2, Truck, Bug, Wrench, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Zekano Cleaning Co",
  description: "Professional cleaning services in Johannesburg — deep cleaning, standard house cleaning, move-in/move-out, office cleaning, pest control, and custom solutions.",
}

const services = [
  {
    id: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A full top-to-bottom clean that reaches every surface, appliance interior, and hidden corner. We strip away built-up grime so the space feels brand new.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
    features: [
      "All surfaces scrubbed and sanitised",
      "Inside ovens, fridges, and microwaves",
      "Baseboards, skirting boards, and cornices",
      "Window sills and tracks",
      "Light fixtures and ceiling fans",
      "Behind and under furniture",
      "Tile grout deep cleaned",
      "Cabinet interiors wiped down",
    ],
  },
  {
    id: "standard-house-cleaning",
    icon: Home,
    title: "Standard House Cleaning",
    description: "Your regular weekly, fortnightly, or monthly clean. We keep things fresh so you don't have to spend your weekends scrubbing.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    features: [
      "Dusting all reachable surfaces",
      "Vacuuming and mopping throughout",
      "Bathrooms cleaned and disinfected",
      "Kitchen counters, sink, and stovetop",
      "Beds made and linens changed",
      "Bins emptied and liners replaced",
      "Mirrors and glass wiped",
      "General tidying of living areas",
    ],
  },
  {
    id: "move-cleaning",
    icon: Truck,
    title: "Move-in / Move-out Cleaning",
    description: "Whether you're handing back keys or settling into a new place, we make sure the property is spotless from floor to ceiling.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: [
      "Full property deep clean",
      "All cupboards and wardrobes wiped out",
      "Appliances cleaned inside and out",
      "Interior window cleaning",
      "Light switches and plug covers",
      "Door frames and handles sanitised",
      "Garage sweep (where applicable)",
      "Final walkthrough before handover",
    ],
  },
  {
    id: "office-cleaning",
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for offices, retail floors, and commercial spaces. A clean workspace keeps your team healthy and your clients impressed.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Daily or weekly cleaning schedules",
      "Desks and workstations wiped down",
      "Reception and common areas maintained",
      "Restrooms fully sanitised",
      "Kitchen and break room cleaned",
      "Floor care including carpet and tile",
      "Waste removal and recycling sorted",
      "After-hours service available",
    ],
  },
  {
    id: "pest-control",
    icon: Bug,
    title: "Pest Control",
    description: "Targeted pest treatments using products that are safe for your family and pets. We deal with the problem at the source so it doesn't come back.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    features: [
      "Full property pest inspection",
      "Ant and cockroach treatment",
      "Spider control",
      "Rodent prevention and sealing",
      "Bed bug treatment",
      "Mosquito spraying",
      "Eco-friendly, low-toxicity products",
      "Ongoing prevention plans",
    ],
  },
  {
    id: "custom-services",
    icon: Wrench,
    title: "Custom Cleaning Solutions",
    description: "Got something specific? Post-build cleanups, event venues, seasonal deep cleans — tell us what you need and we'll put a plan together.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    features: [
      "Post-construction cleanup",
      "Event and function venue cleaning",
      "Seasonal deep cleans",
      "Hoarding and clutter clearance support",
      "Carpet and upholstery cleaning",
      "Pressure washing",
      "Exterior window cleaning",
      "Specialty surface treatments",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title - Simple text, no blue wall */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>What We Do</span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Our <span style={{ color: "#1A9AD2" }}>Services</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From regular house cleans to full post-construction scrub-downs, we handle the hard work so you don't have to.
            </p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                      style={{ backgroundColor: "#6fbf00" }}
                    >
                      Book This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="border-0" style={{ backgroundColor: "#1A9AD2" }}>
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Not Sure Which Service You Need?
                </h2>
                <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                  Send us a message or give us a call. We'll walk through your requirements and recommend the right option.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  >
                    Call 084 402 0733
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
