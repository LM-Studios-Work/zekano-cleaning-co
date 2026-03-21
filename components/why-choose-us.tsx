import Image from "next/image"
import { Shield, Clock, Award, Users, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Your peace of mind is our priority. All our cleaners are background-checked and insured.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book cleaning at your convenience. We work around your schedule, including weekends.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Not satisfied? We'll re-clean for free. Our 100% satisfaction guarantee has you covered.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Trained, experienced, and courteous staff dedicated to delivering exceptional service.",
  },
]

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Happy Customers" },
  { value: "15000+", label: "Cleanings Done" },
  { value: "100%", label: "Satisfaction Rate" },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                alt="Professional cleaning team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-primary text-primary-foreground rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold">{stat.value}</div>
                    <div className="text-xs lg:text-sm opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Why Choose Us</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              The Trusted Choice for Professional Cleaning
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              For over a decade, we've been transforming homes and offices into sparkling clean spaces. Our commitment to quality and customer satisfaction sets us apart.
            </p>

            <div className="mt-8 space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground">Eco-Friendly Products</p>
                <p className="text-sm text-muted-foreground">We use environmentally safe cleaning products that are tough on dirt but gentle on your family and pets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
