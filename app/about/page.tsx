import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users, Award, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Zekano Cleaning Co",
  description: "Learn about Zekano Cleaning Co - your trusted professional cleaning service with over 10 years of experience serving homes and businesses.",
}

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide exceptional cleaning services that transform spaces and exceed expectations, making cleanliness accessible to everyone.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, reliability, and attention to detail guide everything we do. We treat every home as if it were our own.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Our professional cleaners are trained, background-checked, and dedicated to delivering the highest quality service.",
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "100% satisfaction guaranteed. If you're not happy, we'll make it right - that's our commitment to you.",
  },
]

const teamMembers = [
  {
    name: "Jennifer Martinez",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "With 15 years in the cleaning industry, Jennifer founded Zekano Cleaning Co to bring professional-grade cleaning to every home.",
  },
  {
    name: "David Thompson",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "David ensures our teams deliver consistent, high-quality service across all locations.",
  },
  {
    name: "Sarah Kim",
    role: "Customer Success Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Sarah is dedicated to making sure every customer has an exceptional experience.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl text-balance">
                About Zekano Cleaning Co
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                For over a decade, we've been transforming homes and businesses with our professional cleaning services.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Story</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Started with a Simple Vision
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Zekano Cleaning Co was founded in 2014 by Jennifer Martinez, a passionate entrepreneur who saw a need for reliable, professional cleaning services in her community. What started as a one-woman operation has grown into a trusted team of dedicated cleaning professionals.
                  </p>
                  <p>
                    Our journey began with a simple belief: everyone deserves to come home to a clean, welcoming space. We understand that life gets busy, and maintaining a spotless home can feel overwhelming. That's where we come in.
                  </p>
                  <p>
                    Today, we've served over 5,000 satisfied customers, completed more than 15,000 cleanings, and built a reputation for excellence in our community. But our core values remain the same - quality, reliability, and customer satisfaction above all else.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Zekano Cleaning Co team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Drives Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our core values shape everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center border-border">
                  <CardContent className="pt-8 pb-6">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Meet Our Leadership</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The people behind Zekano Cleaning Co's success
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden border-border">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="mt-3 text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Why Customers Choose Us
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Licensed, bonded, and fully insured",
                    "Thorough background checks on all staff",
                    "Eco-friendly cleaning products",
                    "Flexible scheduling options",
                    "100% satisfaction guarantee",
                    "Consistent, reliable service",
                    "Competitive and transparent pricing",
                    "Easy online booking system",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8" size="lg" asChild>
                  <Link href="/book">Book Your Cleaning</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                    alt="Professional cleaning in action"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                Ready to Experience the Zekano Difference?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their homes and businesses.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/book">Book Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="/contact">Contact Us</Link>
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
