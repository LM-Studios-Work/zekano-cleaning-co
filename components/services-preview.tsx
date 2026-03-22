import Link from "next/link"
import { Home, Building2, Truck, Sparkles, Bug, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning for homes that need extra attention. Perfect for spring cleaning or special occasions.",
    href: "/services#deep-cleaning",
  },
  {
    icon: Home,
    title: "Standard House Cleaning",
    description: "Regular cleaning services to keep your home fresh and tidy. Weekly, bi-weekly, or monthly plans available.",
    href: "/services#standard-cleaning",
  },
  {
    icon: Truck,
    title: "Move-in / Move-out Cleaning",
    description: "Comprehensive cleaning for when you're moving. We ensure your old or new place is spotless.",
    href: "/services#move-cleaning",
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    description: "Professional cleaning for offices and commercial spaces. Create a healthy, productive work environment.",
    href: "/services#office-cleaning",
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Safe and effective pest control solutions. Protect your home from unwanted visitors.",
    href: "/services#pest-control",
  },
  {
    icon: MoreHorizontal,
    title: "Custom Services",
    description: "Have specific cleaning needs? Contact us for customized cleaning solutions tailored to you.",
    href: "/contact",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">What We Offer</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Our <span style={{ color: "#6fbf00" }}>Services</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From regular house cleaning to specialized services, we have everything you need for a spotless space.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(31, 159, 217, 0.1)", color: "#1f9fd9" }}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</CardDescription>
                <Link 
                  href={service.href} 
                  className="text-sm font-medium hover:underline inline-flex items-center gap-1"
                  style={{ color: "#1f9fd9" }}
                >
                  Learn more
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-medium text-white transition-colors duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
