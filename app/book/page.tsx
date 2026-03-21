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
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
                {isConfirmed ? "Booking Confirmed!" : "Book Your Cleaning"}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                {isConfirmed 
                  ? "Thank you for choosing Zekano Cleaning Co. We'll see you soon!"
                  : "Schedule your cleaning in just a few easy steps. Choose your service, pick a date, and we'll handle the rest."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-12 lg:py-16 bg-background">
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
