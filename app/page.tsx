import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { ServicesPreview } from "@/components/services-preview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSlideshow />
        <ServicesPreview />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
