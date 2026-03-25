"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BookingForm } from "@/components/booking/booking-form"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"

export interface BookingData {
  // Step 1: Service Selection
  service: string
  frequency: string

  // Step 2: Property Details
  propertyType: string
  bedrooms: string
  bathrooms: string
  extras: string[]

  // Step 3: Date & Time
  date: Date | undefined
  timeSlot: string

  // Step 4: Contact Details
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  zipCode: string
  specialInstructions: string
}

export default function BookPage() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData | null>(null)

  const handleBookingComplete = (data: BookingData) => {
    setBookingData(data)
    setIsConfirmed(true)
  }

  const handleNewBooking = () => {
    setIsConfirmed(false)
    setBookingData(null)
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title - Simple text, no blue wall */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
              {isConfirmed ? "All Done" : "Schedule a Clean"}
            </span>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {isConfirmed ? (
                <>Booking <span style={{ color: "#1A9AD2" }}>Confirmed!</span></>
              ) : (
                <>Book Your <span style={{ color: "#1A9AD2" }}>Cleaning</span></>
              )}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {isConfirmed
                ? "Thank you for choosing Zenako Cleaning Co.. We'll see you soon!"
                : "Pick your service, choose a date, fill in your details — we'll handle the rest."
              }
            </p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            {isConfirmed && bookingData ? (
              <BookingConfirmation
                bookingData={bookingData}
                onNewBooking={handleNewBooking}
              />
            ) : (
              <BookingForm onComplete={handleBookingComplete} />
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
