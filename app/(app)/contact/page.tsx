"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PhoneIcon, MailIcon, ClockIcon, SendIcon, ChatIcon, MapPinIcon } from "@/components/icons"

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Phone",
    details: "084 402 0733",
    action: "tel:+27844020733",
    actionText: "Call us",
  },
  {
    icon: MailIcon,
    title: "Email",
    details: "info@zenakocleaning.co.za",
    action: "mailto:info@zenakocleaning.co.za",
    actionText: "Email us",
  },
  {
    icon: ClockIcon,
    title: "Business Hours",
    details: "Mon-Fri: 08:00 am to 05:00 pm, Sat: 09:00 am to 02:00 pm",
    action: null,
    actionText: null,
  },
]

const serviceAreas = ["Sandton", "Randburg", "Fourways", "Midrand", "Bryanston", "Johannesburg North"]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>Get In Touch</span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Contact <span style={{ color: "#1A9AD2" }}>Us</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              We are available by phone, email, or WhatsApp. Send us a message and we will respond promptly. Professional cleaning services across Johannesburg and surrounding areas.
            </p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((info) => (
                <Card key={info.title} className="text-center border-border">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-card-foreground">{info.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{info.details}</p>
                    {info.action && (
                      <a
                        href={info.action}
                        className="mt-3 inline-block text-sm font-medium hover:underline"
                        style={{ color: "#6fbf00" }}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.actionText} &rarr;
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Quick Contact */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-2xl text-card-foreground">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(111, 191, 0, 0.1)", color: "#6fbf00" }}>
                          <SendIcon className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Message Received</h3>
                        <p className="mt-2 text-muted-foreground">
                          Thank you for contacting us. We will be in touch within 24 hours.
                        </p>
                        <Button
                          className="mt-6"
                          variant="outline"
                          onClick={() => setIsSubmitted(false)}
                        >
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                              id="firstName"
                              placeholder="John"
                              value={formState.firstName}
                              onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              value={formState.lastName}
                              onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="084 XXX XXXX"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interested In</Label>
                          <Select
                            value={formState.service}
                            onValueChange={(value) => setFormState({ ...formState, service: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard-cleaning">Standard House Cleaning</SelectItem>
                              <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                              <SelectItem value="move-cleaning">Move-in/Move-out Cleaning</SelectItem>
                              <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                              <SelectItem value="small-business">Small Business Cleaning</SelectItem>

                              <SelectItem value="mattress-cleaning">Mattress Cleaning</SelectItem>
                              <SelectItem value="curtain-cleaning">Curtain Cleaning</SelectItem>
                              <SelectItem value="carpet-cleaning">Carpet Cleaning</SelectItem>
                              <SelectItem value="upholstery-cleaning">Upholstery Cleaning</SelectItem>
                              <SelectItem value="roof-cleaning">Roof Cleaning</SelectItem>
                              <SelectItem value="drain-cleaning">Drain Cleaning</SelectItem>
                              <SelectItem value="garden-cleanup">Garden Clean-ups</SelectItem>
                              <SelectItem value="pest-control">Pest Control</SelectItem>
                              <SelectItem value="disinfection">Disinfection Services</SelectItem>
                              <SelectItem value="custom-package">Custom Cleaning Package</SelectItem>
                              <SelectItem value="other">Other / General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us about your cleaning needs..."
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact & Service Areas */}
              <div className="space-y-8">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Quick Contact</CardTitle>
                    <CardDescription>
                      Need an immediate response? Try these options:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:+27844020733">
                        <PhoneIcon className="mr-3 h-5 w-5" style={{ color: "#1A9AD2" }} />
                        Call Us: 084 402 0733
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a
                        href="https://wa.me/27844020733"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ChatIcon className="mr-3 h-5 w-5 text-[#25D366]" />
                        WhatsApp Us
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:info@zenakocleaning.co.za">
                        <MailIcon className="mr-3 h-5 w-5" style={{ color: "#1A9AD2" }} />
                        Email: info@zenakocleaning.co.za
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Service Areas */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Service Areas</CardTitle>
                    <CardDescription>
                      We provide cleaning services across Johannesburg and surrounding areas:
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {serviceAreas.map((area) => (
                        <div key={area} className="flex items-center gap-2">
                          <MapPinIcon className="h-4 w-4 shrink-0" style={{ color: "#1A9AD2" }} />
                          <span className="text-sm text-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground">
                      Not listed? Contact us directly. We may be able to accommodate your area.
                    </p>
                  </CardContent>
                </Card>

                {/* Google Map Placeholder */}
                {/*<Card className="border-border">*/}
                {/*  <CardContent className="p-0">*/}
                {/*    <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">*/}
                {/*      <div className="text-center p-6">*/}
                {/*        <MapPinIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />*/}
                {/*        <p className="text-sm text-muted-foreground">Google Map will be displayed here once our Google Business profile is verified.</p>*/}
                {/*        <p className="text-xs text-muted-foreground mt-1">Johannesburg, South Africa</p>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </CardContent>*/}
                {/*</Card>*/}
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
