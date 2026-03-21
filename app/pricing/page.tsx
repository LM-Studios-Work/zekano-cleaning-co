import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Star, Phone } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Pricing & Packages | Zekano Cleaning Co",
  description: "View our competitive pricing for cleaning services. Choose from standard, deep cleaning, and premium packages. Get a free quote today!",
}

const packages = [
  {
    name: "Standard Clean",
    description: "Perfect for regular maintenance cleaning",
    price: "From R99",
    frequency: "per visit",
    features: [
      "Dusting and surface cleaning",
      "Vacuuming and mopping",
      "Bathroom cleaning",
      "Kitchen cleaning",
      "Trash removal",
      "Bed making",
    ],
    popular: false,
  },
  {
    name: "Deep Clean",
    description: "Comprehensive cleaning for a spotless home",
    price: "From R199",
    frequency: "per visit",
    features: [
      "Everything in Standard Clean",
      "Inside appliance cleaning",
      "Baseboards and moldings",
      "Window sills and tracks",
      "Cabinet exteriors",
      "Light fixture cleaning",
      "Behind furniture cleaning",
      "Grout scrubbing",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    description: "Ultimate cleaning experience with extras",
    price: "From R299",
    frequency: "per visit",
    features: [
      "Everything in Deep Clean",
      "Interior window cleaning",
      "Carpet spot treatment",
      "Organization assistance",
      "Laundry (wash & fold)",
      "Refrigerator deep clean",
      "Oven deep clean",
      "Priority scheduling",
      "Same-day availability",
    ],
    popular: false,
  },
]

const additionalServices = [
  { name: "Inside Refrigerator", price: "R35" },
  { name: "Inside Oven", price: "R35" },
  { name: "Interior Windows (per window)", price: "R10" },
  { name: "Laundry (wash & fold)", price: "R25" },
  { name: "Inside Cabinets", price: "R50" },
  { name: "Garage Cleaning", price: "R75+" },
  { name: "Carpet Cleaning (per room)", price: "R50" },
  { name: "Pest Control Treatment", price: "R150+" },
]

const faqs = [
  {
    question: "How do you calculate the final price?",
    answer: "Our pricing is based on the size of your home, the type of cleaning service, and any additional services you request. We provide free, no-obligation quotes after understanding your specific needs.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No! We bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products. If you have specific products you'd like us to use, just let us know.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our priority. If you're not happy with any aspect of our service, contact us within 24 hours and we'll re-clean the area free of charge.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 48 hours in advance for regular cleanings. For deep cleaning or move-in/move-out services, we suggest booking 1 week ahead. However, we do offer same-day service when available.",
  },
  {
    question: "Are your cleaners insured and background checked?",
    answer: "Yes! All our cleaning professionals are fully insured, bonded, and undergo thorough background checks. Your safety and peace of mind are our top priorities.",
  },
  {
    question: "Do you offer discounts for recurring services?",
    answer: "Absolutely! We offer discounts for regular cleaning schedules: 10% off for bi-weekly cleanings and 15% off for weekly cleanings. First-time customers also receive 15% off their first cleaning.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl text-balance">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                No hidden fees, no surprises. Choose the package that fits your needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card key={pkg.name} className={`relative ${pkg.popular ? "border-primary border-2 shadow-lg" : "border-border"}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current" />
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-2xl text-card-foreground">{pkg.name}</CardTitle>
                    <CardDescription className="text-base">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">{pkg.frequency}</span>
                    </div>
                    <ul className="space-y-3 text-left">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={pkg.popular ? "default" : "outline"} asChild>
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-center text-muted-foreground">
              * Prices shown are starting prices for a standard 2-bedroom home. Final price depends on home size and condition.
            </p>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Add-On Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Customize your cleaning with these additional services
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y divide-border">
                    {additionalServices.map((service) => (
                      <li key={service.name} className="flex items-center justify-between px-6 py-4">
                        <span className="text-foreground">{service.name}</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Have questions? We've got answers.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Get Your Free Quote Today
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Contact us for a personalized quote based on your specific needs. No obligation, no pressure.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/book">Book Online</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="tel:+1234567890">
                    <Phone className="mr-2 h-5 w-5" />
                    (123) 456-7890
                  </a>
                </Button>
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
