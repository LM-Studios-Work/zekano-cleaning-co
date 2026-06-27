import { CheckIcon } from "@/components/icons"
import Image from "next/image"

const whyChooseUsPoints = [
  "Professional and reliable service",
  "Attention to detail",
  "Trusted cleaning teams",
  "Flexible cleaning solutions",
  "Quality cleaning products/equipment",
  "Responsive communication",
  "Commitment to customer satisfaction",
]

export function AboutUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] mb-4 block" style={{ color: "#6fbf00" }}>
              About Zenako Cleaning Co.
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance mb-8">
              A clean space creates <br />
              <span style={{ color: "#1A9AD2" }}>peace of mind.</span>
            </h2>
            
            <div className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Zenako Cleaning Co., we believe a clean space creates peace of mind. We provide professional residential and commercial cleaning services designed to help busy homeowners, families, professionals, and businesses maintain beautifully clean, healthy, and welcoming environments.
              </p>
              <p>
                Based in Johannesburg and proudly servicing Sandton, Bryanston, Fourways, Midrand, Randburg, and surrounding areas, our team is committed to delivering reliable, detail-focused cleaning with a professional and personal touch.
              </p>
              <p>
                We understand that inviting a cleaning company into your home or workspace requires trust. That&apos;s why we focus on consistency, professionalism, clear communication, and high standards on every project we take on.
              </p>
            </div>
            
            <div className="mt-12 pt-10 border-t border-border">
              <h3 className="text-2xl font-black text-foreground mb-8">Why Choose Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {whyChooseUsPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-[#1A9AD2]/10 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3" style={{ color: "#1A9AD2" }} />
                    </div>
                    <span className="text-sm font-semibold text-foreground/90">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="relative h-full min-h-[500px] lg:min-h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/cleaning images/zenako-cleaning-team.webp"
              alt="Zenako Cleaning Co. Professional Team"
              fill
              className="object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg border border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full flex items-center justify-center bg-[#6fbf00]/10">
                  <svg className="w-8 h-8" style={{ color: "#6fbf00" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-black text-foreground">Trusted & Reliable</h4>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">Delivering high standards on every single project.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
