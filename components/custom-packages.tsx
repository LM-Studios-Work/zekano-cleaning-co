import Link from "next/link"
import { CheckCircle2, Repeat, Settings, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Settings,
    title: "Tailored to Your Needs",
    description: "Every space is different. We create a cleaning package that fits your exact requirements, schedule, and budget.",
  },
  {
    icon: Repeat,
    title: "Regular Cleaning Plans",
    description: "Choose weekly, fortnightly, or monthly cleaning plans to keep your space consistently fresh and spotless.",
  },
  {
    icon: Award,
    title: "Loyalty Rewards",
    description: "Clients who book ongoing services enjoy special discounts and priority scheduling as a thank you for their trust.",
  },
]

export function CustomPackages() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Flexible Plans</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Customised <span style={{ color: "#6fbf00" }}>Packages</span> &amp; Maintenance Plans
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We don't believe in one-size-fits-all. Our cleaning packages are tailored to each customer's needs, with loyalty rewards for repeat bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {benefits.map((b) => (
            <Card key={b.title} className="border-border text-center">
              <CardContent className="pt-8 pb-6">
                <div
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(111, 191, 0, 0.1)", color: "#6fbf00" }}
                >
                  <b.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: "#6fbf00" }}
          >
            Request a Custom Package
          </Link>
        </div>
      </div>
    </section>
  )
}
