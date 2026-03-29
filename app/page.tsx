import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { ServicesPreview } from "@/components/services-preview"
import { BeforeAfter } from "@/components/before-after"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceAreas } from "@/components/service-areas"
import { Testimonials } from "@/components/testimonials"
import { FirstTimeOffer } from "@/components/first-time-offer"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSlideshow />
        <ServicesPreview />
        <BeforeAfter />
        <WhyChooseUs />
        <ServiceAreas />
        <Testimonials />
        <FirstTimeOffer />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
