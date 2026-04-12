import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckIcon, PhoneIcon, ShieldCheckIcon, ChatIcon } from "@/components/icons"

export const metadata: Metadata = {
  title: "Expert Drain Cleaning Services in Johannesburg | Zenako",
  description:
    "Professional drain cleaning for blocked toilets, slow showers, and kitchen sinks. Using electro-mechanical and high-pressure jetting. Serving Sandton, Randburg, and beyond.",
}

const commonIssues = [
  {
    title: "Blocked Toilets",
    description: "Urgent assistance for overflows or slow flushes caused by foreign objects or accumulation.",
  },
  {
    title: "Slow-Draining Showers",
    description: "Removal of hair, soap scum, and buildup that slows down water exit in bathrooms.",
  },
  {
    title: "Kitchen Sink Blockages",
    description: "Tackling stubborn grease, fat, and food waste that leads to nasty odours and backups.",
  },
  {
    title: "External Drain Overflows",
    description: "Clearing outdoor gullies and sewage lines from root intrusion or debris.",
  },
]

const techniques = [
  {
    title: "Electro-Mechanical Cleaning",
    description: "Using flexible steel cables and specialized cutting heads to break through tough blockages without damaging pipes.",
  },
  {
    title: "High-Pressure Water Jetting",
    description: "A powerful stream of water that scours pipe walls, removing grease, grit, and scale for a complete clean.",
  },
  {
    title: "CCTV Drain Inspections",
    description: "Identifying the exact cause and location of recurring issues using high-definition camera technology.",
  },
]

const steps = [
  {
    number: "01",
    title: "Assessment",
    description: "We identify the source of the blockage using experience and advanced tools.",
  },
  {
    number: "02",
    title: "Free Transparent Quote",
    description: "You'll know exactly what the job costs before we start — no hidden surprise fees.",
  },
  {
    number: "03",
    title: "Resolution",
    description: "Our experts use specialized machinery to clear the blockage quickly and cleanly.",
  },
  {
    number: "04",
    title: "Inspection",
    description: "Final testing ensures water is flowing perfectly before we leave your premises.",
  },
]

const areas = ["Sandton", "Randburg", "Fourways", "Midrand", "Bryanston", "Johannesburg North", "Roodepoort", "Northcliff"]

export default function DrainCleaningPage() {
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
              <span className="text-foreground font-medium">Drain Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Plumbing Support Services
                </span>
                <h1 className="mt-2 text-4xl font-bold sm:text-5xl text-balance">
                  Expert <span style={{ color: "#1A9AD2" }}>Drain Cleaning</span> Services in Johannesburg
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  A blocked drain can disrupt your entire day. At Zenako Cleaning Co., we focus on the efficiency and health of your plumbing system, delivering professional unblocking and maintenance services for homes and businesses across the Gauteng region.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book an Expert
                  </Link>
                  <Link
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold border border-input transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call 084 402 0733
                  </Link>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-xl border-8 border-white">
                <Image
                  src="/cleaning-kitchen-sink-drain.webp"
                  alt="Blocked drain cleaning service in Johannesburg"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl">Common Issues We Resolve</h2>
              <p className="mt-4 text-muted-foreground">From simple kitchen clogs to complex sewage line issues.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonIssues.map((issue, idx) => (
                <div key={idx} className="p-6 border border-border bg-background hover:border-[#1A9AD2] transition-colors">
                  <h3 className="font-bold text-lg mb-3" style={{ color: "#1A9AD2" }}>{issue.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Process */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>The Zenako Process</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-balance mb-16">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="text-6xl font-black mb-4 opacity-10" style={{ color: "#1A9AD2" }}>{step.number}</div>
                  <div className="relative z-10 -mt-10">
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Equipment */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Specialized Equipment &amp; Techniques</h2>
                <div className="space-y-8">
                  {techniques.map((tech, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full text-white font-bold" style={{ backgroundColor: "#1A9AD2" }}>{idx+1}</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">{tech.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f3fbf0" }}>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#6fbf00" }}>Why Choose Zenako for Drainage?</h3>
                <ul className="space-y-4">
                  {[
                    "Direct Owner Supervision & Accountability",
                    "Fully Vetted & Familiar Professionals",
                    "No Surprise Price Fluctuations After Booking",
                    "Available 7 Days a Week for Appointments",
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-3 items-start font-medium">
                      <ShieldCheckIcon className="h-5 w-5 shrink-0" style={{ color: "#6fbf00" }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                   <Link
                      href="/book"
                      className="block text-center rounded-none px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#1A9AD2" }}
                    >
                      Book Your Drain Clean
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Serving Johannesburg Suburbs</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map(area => (
                <span key={area} className="px-4 py-2 bg-white border border-border text-sm font-medium">{area}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-20" style={{ backgroundColor: "#6fbf00" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don't Let a Blocked Drain Ruin Your Day</h2>
            <p className="mb-8 text-white/90 text-lg">Contact the experts at Zenako Cleaning Co. for fast, efficient, and transparent service.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-10 py-4 font-bold transition-transform hover:scale-105"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    084 402 0733
                  </Link>
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 font-bold transition-transform hover:scale-105"
                  >
                    Book Online
                  </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
