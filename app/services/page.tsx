import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Home, Building2, Truck, Bug, Wrench, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Zekano Cleaning Co",
  description: "Explore our professional cleaning services including deep cleaning, standard house cleaning, move-in/move-out cleaning, office cleaning, and pest control.",
}

const services = [
  {
    id: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Our comprehensive deep cleaning service covers every corner of your home, including hard-to-reach areas that are often overlooked.",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
    features: [
      "Thorough cleaning of all surfaces",
      "Inside appliances (oven, refrigerator, microwave)",
      "Baseboards and crown moldings",
      "Window sills and tracks",
      "Light fixtures and ceiling fans",
      "Behind and under furniture",
      "Grout cleaning and sanitizing",
      "Cabinet exteriors and interiors",
    ],
  },
  {
    id: "standard-house-cleaning",
    icon: Home,
    title: "Standard House Cleaning",
    description: "Regular maintenance cleaning to keep your home looking its best. Perfect for weekly, bi-weekly, or monthly cleaning schedules.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    features: [
      "Dusting all surfaces",
      "Vacuuming and mopping floors",
      "Bathroom cleaning and sanitizing",
      "Kitchen cleaning including countertops",
      "Making beds and changing linens",
      "Emptying trash bins",
      "Glass and mirror cleaning",
      "General tidying up",
    ],
  },
  {
    id: "move-cleaning",
    icon: Truck,
    title: "Move-in / Move-out Cleaning",
    description: "Ensure your new place is spotless before you move in, or leave your old place in perfect condition for the next occupant.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: [
      "Complete property deep clean",
      "Inside all cabinets and closets",
      "Appliance cleaning inside and out",
      "Window cleaning interior",
      "Light switch and outlet covers",
      "Door frames and handles",
      "Garage cleaning (if applicable)",
      "Final walkthrough inspection",
    ],
  },
  {
    id: "office-cleaning",
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning services for offices, retail spaces, and commercial properties. Create a healthy work environment.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    features: [
      "Daily or weekly cleaning schedules",
      "Desk and workstation cleaning",
      "Common area maintenance",
      "Restroom sanitization",
      "Kitchen/break room cleaning",
      "Floor care and carpet cleaning",
      "Trash removal and recycling",
      "Flexible after-hours service",
    ],
  },
  {
    id: "pest-control",
    icon: Bug,
    title: "Pest Control",
    description: "Safe and effective pest control solutions to protect your home from unwanted visitors. We use eco-friendly treatments.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
    features: [
      "Comprehensive pest inspection",
      "Ant and roach treatment",
      "Spider control",
      "Rodent prevention",
      "Bed bug treatment",
      "Mosquito control",
      "Eco-friendly products",
      "Preventive maintenance plans",
    ],
  },
  {
    id: "custom-services",
    icon: Wrench,
    title: "Custom Cleaning Services",
    description: "Have specific cleaning needs? We offer customized cleaning solutions tailored to your unique requirements.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    features: [
      "Post-construction cleaning",
      "Event cleanup services",
      "Seasonal deep cleaning",
      "Hoarding cleanup assistance",
      "Carpet and upholstery cleaning",
      "Pressure washing",
      "Window cleaning exterior",
      "Specialty surface treatment",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl text-balance">
                Our Cleaning Services
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                From everyday tidying to deep cleaning transformations, we offer a full range of professional cleaning services for homes and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-background">
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/book">
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="bg-primary border-0">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
                  Not Sure Which Service You Need?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Contact us for a free consultation and we'll help you find the perfect cleaning solution for your space.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Get Free Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    <a href="tel:+27084402">Call Us Now</a>
                  </Button>
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
