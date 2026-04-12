import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckIcon, PhoneIcon, ShieldCheckIcon, ChatIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Professional On-Site Curtain Cleaning in Johannesburg | Zenako",
  description:
    "Specialized curtain and blinds cleaning while they hang. Deep steam extraction for drapes, sheers, and Roman blinds. Serving Sandton, Randburg, and all Johannesburg suburbs.",
}

const processes = [
  {
    title: "Deep Steam Extraction",
    description: "Using specialized low-moisture steam to penetrate deep into fabrics, removing dirt and odours without saturation.",
  },
  {
    title: "Dust & Allergen Sanitisation",
    description: "Effectively removing dust mites, pollen, and pet dander that accumulate in heavy fabrics over time.",
  },
  {
    title: "Fabric Integrity Care",
    description: "Our methods are safe for delicate silks, velvets, and linens, ensuring no shrinkage or damage to your window treatments.",
  },
  {
    title: "Blinds & Specialty Treatments",
    description: "Beyond curtains, we expertly clean Roman blinds and vertical treatments using precision attachments.",
  },
]

const fabricTypes = [
  { name: "Heavy Drapes & Linings", desc: "Deep cleaning for thick materials that hold moisture and dust." },
  { name: "Delicate Sheers", desc: "Gentle treatment for light, translucent fabrics to restore clarity." },
  { name: "Blackout Curtains", desc: "Thorough cleaning of thermal and light-blocking layers." },
  { name: "Roman Blinds", desc: "Detailed cleaning for structured fabric window treatments." },
]

const steps = [
  { title: "Pre-Inspection", desc: "We identify fabric types and spot-test for colour fastness." },
  { title: "Industrial Vacuuming", desc: "Removal of loose dust and surface debris from both sides." },
  { title: "Targeted Treatment", desc: "Pre-treatment of visible stains or water marks." },
  { title: "Deep Steam Cleaning", desc: "The main cleaning phase using high-performance on-site equipment." },
  { title: "Final Deodorising", desc: "Leaving your room smelling fresh with a nature-friendly scent." },
]

export default function CurtainCleaningPage() {
  return (
    <>
      <Header />
      <main className="pt-24 text-foreground">
        {/* Breadcrumb */}
        <section className="py-4 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Curtain Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Specialized Fabric Care
                </span>
                <h1 className="mt-2 text-4xl font-bold sm:text-5xl text-balance">
                  Professional <span style={{ color: "#1A9AD2" }}>Curtain Cleaning</span> in Johannesburg
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Curtains are the filters of your home, trapping dust, allergens, and odors. At Zenako Cleaning Co., we specialise in deep-cleaning curtains and blinds while they remain hanging — saving you the hassle of removal and re-installation.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book On-Site Clean
                  </Link>
                  <Link
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold border border-input transition-colors duration-200"
                  >
                    <ChatIcon className="h-4 w-4" />
                    Get a Free Quote
                  </Link>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/Curtain-Cleaning.jpg"
                  alt="On-site curtain cleaning service in Johannesburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* On-Site Cleaning Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl">On-Site Cleaning Process</h2>
              <p className="mt-4 text-muted-foreground">Expert care for your window treatments without the need for removal.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {processes.map((proc, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-lg text-white" style={{ backgroundColor: "#1A9AD2" }}>
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{proc.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{proc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fabric Care Grid */}
        <section className="py-16 lg:py-24 bg-background border-y border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Care for All Fabric Types</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fabricTypes.map((type, idx) => (
                <div key={idx} className="p-8 bg-white border border-border text-center flex flex-col items-center">
                  <div className="w-10 h-1 bg-[#6fbf00] mb-6"></div>
                  <h3 className="font-bold text-lg mb-3">{type.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Zenako Advantage */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
             <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>The Zenako Advantage</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Direct Owner Supervision", desc: "Unlike large platform services, we handle every detail with personal accountability." },
                { title: "Vetted Professionals", desc: "Rest easy knowing your home is in the hands of trusted, security-screened experts." },
                { title: "No Hidden Costs", desc: "Transparent upfront pricing. No sudden 'logistics' or 'travel' fees added later." },
                { title: "Gauteng Expertise", desc: "Local knowledge of Johannesburg's climate and dust levels for better cleaning results." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                   <ShieldCheckIcon className="w-12 h-12 mb-4" style={{ color: "#1A9AD2" }} />
                   <h3 className="font-bold mb-2">{item.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold">Step-by-Step Excellence</h2>
            </div>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-white border border-border items-center">
                   <span className="text-2xl font-black opacity-20" style={{ color: "#6fbf00" }}>{idx + 1}</span>
                   <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white border-t border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Serving the Greater Johannesburg Area</h2>
            <p className="text-muted-foreground mb-8">Sandton, Randburg, Fourways, Midrand, Bryanston, Northcliff, and Roodepoort.</p>
            <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-none px-12 py-4 text-lg font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#1A9AD2" }}
              >
                Book Your On-Site Curtain Clean
              </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A9AD2" }}>
           <div className="mx-auto max-w-5xl px-4 lg:px-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4 text-balance">Revitalise Your Home with Fresh, Clean Curtains</h2>
              <p className="mb-8 text-white/90 max-w-2xl mx-auto">Experience the difference of truly clean fabrics. Call us at <strong>084 402 0733</strong> or book your consultation online today.</p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: "#6fbf00" }}
              >
                Get a Free Quote
              </Link>
           </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
