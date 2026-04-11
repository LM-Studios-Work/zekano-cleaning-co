'use client'

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, PhoneIcon } from "@/components/icons"

export default function MoveInMoveOutCleaning() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const inspectionItems = [
    {
      title: "Kitchen",
      image: "/move in move out/kitchen.webp",
      items: [
        "Clean cupboards and drawers (inside and outside)",
        "Deep oven clean (inside and out)",
        "Hobs and stovetop cleaned",
        "Extractor fans cleaned and degreased",
        "Appliance surrounds wiped down",
      ],
    },
    {
      title: "Bathrooms",
      image: "/move in move out/bathroom.webp",
      items: [
        "Deep descaling of tiles and grout",
        "Toilet sanitisation (inside, outside, and cistern)",
        "Shower and bathtub scrubbed clean",
        "Chrome fixtures polished",
        "Mirror and glass cleaned streak-free",
      ],
    },
    {
      title: "Living & Bedrooms",
      image: "/move in move out/bedrooms.webp",
      items: [
        "Skirting boards wiped clean",
        "Light switches and power points sanitised",
        "Window tracks (interior) cleaned",
        "Door frames and handles polished",
        "Cobwebs removed from corners and ceilings",
      ],
    },
    {
      number: "04",
      title: "Floors",
      image: "/move in move out/floors.webp",
      items: [
        "Professional-grade vacuuming of all areas",
        "Deep mopping of hard surfaces",
        "Tile grout lines cleaned thoroughly",
        "Baseboards and corners vacuumed",
        "Any stains or marks removed",
      ],
    },
  ]

  const whyUsPoints = [
    {
      title: "Owner-Supervised Teams",
      description: "Unlike faceless cleaning services, your move-out clean is overseen by our management. If anything is flagged, we handle it personally and fairly.",
      icon: "CheckIcon",
    },
    {
      title: "Vetted & Police-Checked Professionals",
      description: "Every cleaner on your property is background-checked, insured, and trained specifically for move-out standards aligned with estate agent requirements.",
      icon: "CheckIcon",
    },
    {
      title: "Deep Oven Cleaning Included",
      description: "Standard move-out cleaning includes full interior and exterior oven cleaning—a critical item on landlord and agent inspection checklists.",
      icon: "CheckIcon",
    },
    {
      title: "All Equipment & Products Provided",
      description: "We bring our own professional-grade detergents, equipment, and tools. You don't need to provide anything. We handle the entire clean.",
      icon: "CheckIcon",
    },
  ]

  const exclusions = [
    "Carpet Steam Cleaning (available as add-on)",
    "Exterior Window Cleaning (available as add-on)",
    "Pest Control Services (available as add-on)",
    "Garden or Yard Work",
    "Structural Repairs",
  ]

  const faqs = [
    {
      id: "timeline",
      question: "How long does a move-out clean take?",
      answer: "The duration depends on the property size and condition. A typical 3-bedroom house takes 4-6 hours. Larger properties may require additional time. We assess your property upfront and provide a clear timeline.",
    },
    {
      id: "notice",
      question: "How much notice do you need?",
      answer: "We aim to accommodate move-outs with as little as 48 hours notice, though longer notice helps us schedule your team efficiently. Contact us urgently if your date is coming up soon.",
    },
    {
      id: "deposit",
      question: "What is your Deposit Back Guarantee?",
      answer: "If your landlord or estate agent flags a cleaning issue from our inspection checklist within 72 hours of the clean, we return at no cost for a re-clean. This protects your deposit return.",
    },
    {
      id: "home",
      question: "Do I need to be home during the clean?",
      answer: "No. Many clients provide us with key access or meeting instructions so we can clean while they're away or manage final packing. We respect your timeline and property.",
    },
    {
      id: "checklist",
      question: "Are your checklists aligned with estate agent standards?",
      answer: "Yes. Our inspection checklist is aligned with professional estate agent and landlord standards across Johannesburg, including requirements from major agencies.",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Breadcrumb */}
        <section className="py-4 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Move-in / Move-out Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Move-In / Move-Out Cleaning
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Professional Move-in / Move-out Cleaning in Johannesburg
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Book a checklist-based clean with a Deposit Back Guarantee. Upfront pricing, owner-supervised, and aligned with Johannesburg&apos;s top estate agent standards. We serve Johannesburg and surrounding areas including Sandton, Randburg, Midrand, and Fourways.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book Your Move-Out Clean
                  </Link>
                  <a
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-foreground border border-input transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us Today
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src="/move in move out/move in move out hero.webp" 
                  alt="Professional move-out cleaning in Johannesburg" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Why Choose Zenako for Your Move-Out Clean
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional, accountable, and guaranteed to help you get your full deposit back.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, idx) => (
                <div key={idx} className="p-6 lg:p-8 bg-background border border-border">
                  <div className="flex items-center justify-center w-12 h-12 rounded-none mb-4" style={{ backgroundColor: "#6fbf00" }}>
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{point.title}</h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection Checklist */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Checklist</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                What&apos;s Included in Our Move-Out Clean
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our cleaning is completed using a detailed, room-by-room checklist aligned with professional estate agent and landlord inspection requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inspectionItems.map((section, idx) => (
                <Card key={idx} className="border-border overflow-hidden">
                  <div className="aspect-[3/2] relative">
                    <Image 
                      src={section.image} 
                      alt={section.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground text-lg mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3">
                          <CheckIcon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Timeline Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Process</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                What Happens Before, During, and After Your Clean
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Before the Team Arrives (Quick Preparation)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The property should be vacated and free of personal belongings, with access to all rooms. If possible, arrange parking nearby so our equipment can be brought in easily. You don&apos;t need to do any pre-cleaning.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">On the Day: Full-Property Clean</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our team follows a detailed, room-by-room checklist to clean kitchens, bathrooms, living areas, and bedrooms, focusing on inspection-critical areas. We bring all equipment and professional detergents. The property will be thoroughly clean and ready for inspection.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Included: Deep Oven Clean</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The oven is cleaned inside and out, including racks and trays, as part of the standard service. This is a critical item on landlord and agent inspection checklists.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">After the Clean: 72-Hour Inspection Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If your agent or landlord flags a cleaning issue from the checklist within 72 hours, we return for a free re-clean. Your deposit is our priority.
                  </p>
                </div>
              </div>
              <div className="aspect-[3/2] relative lg:sticky lg:top-24">
                <Image 
                  src="/move in move out/move in move out hero.webp" 
                  alt="Move-out cleaning process" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Exclusions & Add-ons */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Not Included (But Available as Add-ons)</h2>
                <p className="text-muted-foreground mb-6">
                  Our standard move-out clean covers comprehensive interior cleaning aligned with estate agent standards. The following services are separate and can be added to your booking:
                </p>
                <ul className="space-y-3">
                  {exclusions.map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-lg" style={{ color: "#6fbf00" }}>→</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 border-l-4 bg-white" style={{ borderColor: "#6fbf00" }}>
                <h3 className="text-2xl font-bold text-foreground mb-4">Deposit Back Guarantee</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If your landlord or estate agent flags a cleaning issue related to our checklist within 72 hours of the move-out clean, we return and re-clean that area at no cost. This guarantee gives you peace of mind and protects your deposit return.
                </p>
                <div className="space-y-3 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-foreground">Coverage includes any items on our inspection checklist:</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>✓ Kitchen and appliance cleanliness</li>
                    <li>✓ Bathroom condition and sanitisation</li>
                    <li>✓ Flooring and skirting boards</li>
                    <li>✓ Windows, doors, and light switches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Have questions about your move-out clean? We&apos;ve answered the most common ones below.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full text-left p-6 bg-background border border-border transition-all hover:border-[#1A9AD2]/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-foreground text-lg">{faq.question}</h3>
                    <span 
                      className="text-2xl font-light mt-0.5 shrink-0 transition-transform"
                      style={{ color: "#1A9AD2" }}
                    >
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </div>
                  {expandedFaq === faq.id && (
                    <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready for Your Move-Out Clean?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Get your property inspection-ready with Zenako. Upfront pricing, owner-supervised service, and guaranteed deposit protection.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              Book Your Clean Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
