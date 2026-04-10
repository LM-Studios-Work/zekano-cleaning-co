import { BookingData } from "@/app/book/page"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Calendar, MapPin, Phone, Mail, Home, Sparkles } from "lucide-react"
import { format } from "date-fns"
import Link from "next/link"

const serviceNames: Record<string, string> = {
  "deep-cleaning": "Deep Cleaning",
  "standard-house-cleaning": "Standard Cleaning",
  "move-cleaning": "Move-in/Move-out Cleaning",
  "office-cleaning": "Office Cleaning",
  "pest-control": "Pest Control",
  "custom": "Custom Service",
}

const frequencyNames: Record<string, string> = {
  "one-time": "One-Time",
  "weekly": "Weekly",
  "bi-weekly": "Bi-Weekly",
  "monthly": "Monthly",
}

const extraNames: Record<string, string> = {
  "inside-fridge": "Inside Refrigerator",
  "inside-oven": "Inside Oven",
  "inside-cabinets": "Inside Cabinets",
  "laundry": "Laundry (Wash & Fold)",
  "windows": "Interior Windows",
  "garage": "Garage Cleaning",
  "deep-carpet": "Deep Carpet Cleaning",
  "windows-exterior": "Exterior Windows",
  "after-hours": "After Hours Service",
  "deodorizer": "Deodorizer Treatment",
  "stain-protect": "Stain Protection",
  "pet-odour": "Pet Odour Treatment",
  "emergency": "Emergency Callout",
  "priority": "Priority Scheduling",
}

interface BookingConfirmationProps {
  bookingData: BookingData
  onNewBooking: () => void
}

export function BookingConfirmation({ bookingData, onNewBooking }: BookingConfirmationProps) {
  const bookingNumber = `SC${Date.now().toString().slice(-8)}`

  return (
    <div className="space-y-8">
      {/* Success Message */}
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Booking Confirmed!</h2>
        <p className="mt-2 text-muted-foreground">
          Your booking number is: <span className="font-semibold text-primary">{bookingNumber}</span>
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          A confirmation email has been sent to {bookingData.email}
        </p>
      </div>

      {/* Booking Details */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Booking Summary</CardTitle>
          <CardDescription>Here are the details of your booking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Service Details */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Service Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
              <div>
                <span className="text-sm text-muted-foreground">Service Type</span>
                <p className="font-medium text-foreground">{serviceNames[bookingData.service] || bookingData.service}</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Frequency</span>
                <p className="font-medium text-foreground">{frequencyNames[bookingData.frequency] || bookingData.frequency}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Property Details */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              Property Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pl-7">
              <div>
                <span className="text-sm text-muted-foreground">Property Type</span>
                <p className="font-medium text-foreground capitalize">{bookingData.propertyType}</p>
              </div>
              {bookingData.bedrooms && (
                <div>
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <p className="font-medium text-foreground">{bookingData.bedrooms}</p>
                </div>
              )}
              {bookingData.bathrooms && (
                <div>
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                  <p className="font-medium text-foreground">{bookingData.bathrooms}</p>
                </div>
              )}
            </div>
            {bookingData.extras.length > 0 && (
              <div className="pl-7">
                <span className="text-sm text-muted-foreground">Add-On Services</span>
                <p className="font-medium text-foreground">
                  {bookingData.extras.map(e => extraNames[e] || e).join(", ")}
                </p>
              </div>
            )}
          </div>

          <Separator />

          {/* Date & Time */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Schedule
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-7">
              <div>
                <span className="text-sm text-muted-foreground">Date</span>
                <p className="font-medium text-foreground">
                  {bookingData.date ? format(bookingData.date, "EEEE, MMMM d, yyyy") : "Not selected"}
                </p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Time Slot</span>
                <p className="font-medium text-foreground">{bookingData.timeSlot}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Contact & Address */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Contact & Location
            </h3>
            <div className="pl-7 space-y-2">
              <p className="font-medium text-foreground">
                {bookingData.firstName} {bookingData.lastName}
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {bookingData.email}
              </p>
              <p className="text-muted-foreground flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {bookingData.phone}
              </p>
              <p className="text-muted-foreground">
                {bookingData.address}, {bookingData.city} {bookingData.postalCode}
              </p>
            </div>
          </div>

          {bookingData.specialInstructions && (
            <>
              <Separator />
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Special Instructions</h3>
                <p className="text-muted-foreground pl-0">{bookingData.specialInstructions}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* What's Next */}
      <Card className="border-border bg-primary/5">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-foreground mb-4">What Happens Next?</h3>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">1</span>
              <span>You'll receive a confirmation email with your booking details and receipt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">2</span>
              <span>Our team will contact you 24 hours before your appointment to confirm.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">3</span>
              <span>Our cleaning professionals will arrive at your scheduled time with all equipment and supplies required to complete the job.</span>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="outline" onClick={onNewBooking}>
          Book Another Cleaning
        </Button>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>

      {/* Contact Info */}
      <p className="text-center text-sm text-muted-foreground">
        Need to make changes? Contact us at{" "}
        <a href="tel:+27844020733" className="text-primary hover:underline">084 402 0733</a>
        {" "}or{" "}
        <a href="mailto:info@zenakocleaning.co.za" className="text-primary hover:underline">info@zenakocleaning.co.za</a>
      </p>
    </div>
  )
}
