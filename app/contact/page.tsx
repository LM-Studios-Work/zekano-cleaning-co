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
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(123) 456-7890",
    action: "tel:+1234567890",
    actionText: "Call us",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@zekanocleaningco.com",
    action: "mailto:info@zekanocleaningco.com",
    actionText: "Email us",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Clean Street, Suite 100, Your City, ST 12345",
    action: "https://maps.google.com",
    actionText: "Get directions",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Sat: 7AM - 8PM, Sun: 9AM - 5PM",
    action: null,
    actionText: null,
  },
]

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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl text-balance">
                Contact Us
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Have questions or ready to book? We'd love to hear from you. Reach out anytime!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="text-center border-border">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-card-foreground">{info.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{info.details}</p>
                    {info.action && (
                      <a
                        href={info.action}
                        className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
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

        {/* Contact Form & Map */}
        <section className="py-16 lg:py-24 bg-card">
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
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                          <Send className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                        <p className="mt-2 text-muted-foreground">
                          Thank you for reaching out. We'll get back to you soon.
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
                            placeholder="(123) 456-7890"
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
                              <SelectItem value="deep-cleaning">Deep Cleaning</SelectItem>
                              <SelectItem value="standard-cleaning">Standard House Cleaning</SelectItem>
                              <SelectItem value="move-cleaning">Move-in/Move-out Cleaning</SelectItem>
                              <SelectItem value="office-cleaning">Office Cleaning</SelectItem>
                              <SelectItem value="pest-control">Pest Control</SelectItem>
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

              {/* Map & Quick Contact */}
              <div className="space-y-8">
                {/* Google Maps Embed */}
                <Card className="overflow-hidden border-border">
                  <div className="aspect-[4/3] relative bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959848281!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Zekano Cleaning Co Location"
                      className="absolute inset-0"
                    />
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Quick Contact</CardTitle>
                    <CardDescription>
                      Need an immediate response? Try these options:
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="tel:+1234567890">
                        <Phone className="mr-3 h-5 w-5 text-primary" />
                        Call Us: (123) 456-7890
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a 
                        href="https://wa.me/1234567890" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-3 h-5 w-5 text-[#25D366]" />
                        WhatsApp Us
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="mailto:info@zekanocleaningco.com">
                        <Mail className="mr-3 h-5 w-5 text-primary" />
                        Email: info@zekanocleaningco.com
                      </a>
                    </Button>
                  </CardContent>
                </Card>
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
