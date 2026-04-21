"use client"

import { useState } from "react"
import { BookingData } from "@/app/book/page"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"

import { serviceCategories, allServices } from "@/lib/services-data"

const frequencies = [
  { id: "one-time", name: "One-Time", discount: "10% off first time" },
  { id: "weekly", name: "Weekly", discount: "15% off" },
  { id: "bi-weekly", name: "Bi-Weekly", discount: "10% off" },
  { id: "monthly", name: "Monthly", discount: "5% off" },
]

// Mon–Fri 08:00–17:00 · Sat 09:00–14:00 · Sun closed
const weekdaySlots = [
  "8:00 AM – 10:00 AM",
  "10:00 AM – 12:00 PM",
  "12:00 PM – 2:00 PM",
  "2:00 PM – 4:00 PM",
]

const saturdaySlots = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
]

const getTimeSlots = (date?: Date) => {
  if (!date) return weekdaySlots
  return date.getDay() === 6 ? saturdaySlots : weekdaySlots
}

const getCategoryConfig = (serviceSlug: string) => {
  const service = allServices.find(s => s.slug === serviceSlug);
  const categorySlug = service?.categorySlug || "residential-cleaning";
  
  switch (categorySlug) {
    case "commercial-cleaning":
      return {
        propertyTypes: ["Office", "Retail Space", "Clinic", "Warehouse"],
        showBedBath: false,
        extras: [
          { id: "deep-carpet", name: "Deep Carpet Cleaning", price: "Quote" },
          { id: "windows-exterior", name: "Exterior Windows", price: "Quote" },
          { id: "after-hours", name: "After Hours Service", price: "Quote" },
        ]
      };
    case "upholstery-and-fabric":
      return {
        propertyTypes: ["House", "Apartment", "Office", "Hotel"],
        showBedBath: false,
        extras: [
          { id: "deodorizer", name: "Deodorizer Treatment", price: "+R50" },
          { id: "stain-protect", name: "Stain Protection", price: "+R100" },
          { id: "pet-odour", name: "Pet Odour Treatment", price: "+R75" },
        ]
      };
    case "specialised-cleaning":
      return {
        propertyTypes: ["House", "Commercial Building", "Apartment Complex", "Estate"],
        showBedBath: false,
        extras: [
          { id: "emergency", name: "Emergency Callout", price: "+R200" },
          { id: "priority", name: "Priority Scheduling", price: "+R100" },
        ]
      };
    case "residential-cleaning":
    default:
      return {
        propertyTypes: ["House", "Apartment", "Condo", "Estate"],
        showBedBath: true,
        extras: [
          { id: "inside-fridge", name: "Inside Refrigerator", price: "+R35" },
          { id: "inside-oven", name: "Inside Oven", price: "+R35" },
          { id: "inside-cabinets", name: "Inside Cabinets", price: "+R50" },
          { id: "laundry", name: "Laundry (Wash & Fold)", price: "+R25" },
          { id: "windows", name: "Interior Windows", price: "+R10/window" },
          { id: "garage", name: "Garage Cleaning", price: "+R75" },
        ]
      };
  }
}

interface BookingFormProps {
  onComplete: (data: BookingData) => void
}

export function BookingForm({ onComplete }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [showServiceError, setShowServiceError] = useState(false)
  const [formData, setFormData] = useState<BookingData>({
    service: "",
    frequency: "one-time",
    propertyType: "house",
    bedrooms: "2",
    bathrooms: "1",
    extras: [],
    date: undefined,
    timeSlot: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    specialInstructions: "",
  })
  const totalSteps = 4
  const currentConfig = getCategoryConfig(formData.service)

  const updateFormData = (field: keyof BookingData, value: BookingData[keyof BookingData]) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value }
      
      if (field === "service") {
        const oldService = allServices.find(s => s.slug === prev.service);
        const newService = allServices.find(s => s.slug === value);
        const oldCategory = oldService?.categorySlug || "residential-cleaning";
        const newCategory = newService?.categorySlug || "residential-cleaning";
        
        if (oldCategory !== newCategory) {
          const newConfig = getCategoryConfig(value as string);
          newData.propertyType = newConfig.propertyTypes[0].toLowerCase();
          newData.extras = [];
          if (!newConfig.showBedBath) {
            newData.bedrooms = "";
            newData.bathrooms = "";
          } else {
            newData.bedrooms = "2";
            newData.bathrooms = "1";
          }
        }
      }
      
      return newData;
    })
    
    if (field === "service") {
      setShowServiceError(false)
    }
  }

  const toggleExtra = (extraId: string) => {
    setFormData((prev) => ({
      ...prev,
      extras: prev.extras.includes(extraId)
        ? prev.extras.filter((e) => e !== extraId)
        : [...prev.extras, extraId],
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.service !== ""
      case 2:
        if (currentConfig.showBedBath) {
          return formData.propertyType !== "" && formData.bedrooms !== "" && formData.bathrooms !== ""
        }
        return formData.propertyType !== ""
      case 3:
        return formData.date !== undefined && formData.timeSlot !== ""
      case 4:
        return (
          formData.firstName !== "" &&
          formData.lastName !== "" &&
          formData.email !== "" &&
          formData.phone !== "" &&
          formData.address !== "" &&
          formData.city !== "" &&
          formData.postalCode.length === 4
        )
      default:
        return false
    }
  }

  const handleNext = () => {
    if (step === 1 && formData.service === "") {
      setShowServiceError(true)
      return
    }

    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    const selectedService = allServices.find(s => s.slug === formData.service)
    const selectedFrequency = frequencies.find(f => f.id === formData.frequency)
    const config = getCategoryConfig(formData.service)
    const selectedExtras = formData.extras
      .map(id => config.extras.find(e => e.id === id)?.name)
      .filter(Boolean)
      .join(', ') || 'None'
    const formattedDate = formData.date
      ? formData.date.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      : 'Not selected'

    const lines = [
      'Hi Zenako Cleaning! I would like to book a cleaning service.',
      '',
      `*Service:* ${selectedService?.name ?? formData.service}`,
      `*Frequency:* ${selectedFrequency?.name ?? formData.frequency}`,
      `*Property Type:* ${formData.propertyType}`,
    ]

    if (config.showBedBath) {
      lines.push(`*Bedrooms:* ${formData.bedrooms}`)
      lines.push(`*Bathrooms:* ${formData.bathrooms}`)
    }

    lines.push(
      `*Extras:* ${selectedExtras}`,
      `*Date:* ${formattedDate}`,
      `*Time:* ${formData.timeSlot}`,
      '',
      '*Contact Details:*',
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address}, ${formData.city}, ${formData.postalCode}`,
    )

    if (formData.specialInstructions) {
      lines.push(`Special Instructions: ${formData.specialInstructions}`)
    }

    const encodedMessage = encodeURIComponent(lines.join('\n'))
    window.open('https://wa.me/27844020733?text=' + encodedMessage, '_blank')
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-colors ${
                  s < step
                    ? "bg-primary text-primary-foreground"
                    : s === step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s < step ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 4 && (
                <div
                  className={`h-1 w-12 sm:w-20 md:w-32 lg:w-40 mx-2 rounded ${
                    s < step ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>Service</span>
          <span>Property</span>
          <span>Schedule</span>
          <span>Details</span>
        </div>
      </div>

      {/* Step 1: Service Selection */}
      {step === 1 && (
        <Card className="border-border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="text-card-foreground">Select Your Service</CardTitle>
            <CardDescription>Choose the type of cleaning service you need</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="w-full">
              <Select
                value={formData.service}
                onValueChange={(value) => updateFormData("service", value)}
              >
                <SelectTrigger className={`w-full text-left h-14 text-base ${showServiceError ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent className="max-h-[350px]">
                  {serviceCategories.map((cat) => (
                    <SelectGroup key={cat.slug} className="mb-2">
                      <SelectLabel className="bg-muted/30 py-2 px-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">{cat.name}</SelectLabel>
                      {cat.services.map((svc) => (
                        <SelectItem key={svc.slug} value={svc.slug} className="py-2.5 px-4 cursor-pointer">
                          <div className="flex flex-col">
                            <span className="font-semibold">{svc.name}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              
              {showServiceError && (
                <p className="text-sm text-red-500 mt-2">Please select a service</p>
              )}

              {formData.service && (() => {
                const selectedService = allServices.find((s) => s.slug === formData.service);
                if (!selectedService) return null;
                return (
                  <div className="mt-6 p-5 rounded-lg bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">
                        {selectedService.title}
                      </h4>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="space-y-3">
              <Label className="text-foreground">How often do you need cleaning?</Label>
              <RadioGroup
                value={formData.frequency}
                onValueChange={(value) => updateFormData("frequency", value)}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {frequencies.map((freq) => (
                  <div key={freq.id}>
                    <RadioGroupItem
                      value={freq.id}
                      id={freq.id}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={freq.id}
                      className={`flex flex-col items-center justify-center min-h-[72px] h-full p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.frequency === freq.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-medium text-foreground">{freq.name}</span>
                      {freq.discount && (
                        <span className="text-xs text-primary font-semibold mt-1">{freq.discount}</span>
                      )}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Property Details */}
      {step === 2 && (
        <Card className="border-border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="text-card-foreground">Property Details</CardTitle>
            <CardDescription>Tell us about your property so we can provide an accurate quote</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label className="text-foreground">Property Type</Label>
              <RadioGroup
                value={formData.propertyType}
                onValueChange={(value) => updateFormData("propertyType", value)}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {currentConfig.propertyTypes.map((type) => {
                  const typeValue = type.toLowerCase()
                  return (
                    <div key={typeValue}>
                      <RadioGroupItem
                        value={typeValue}
                        id={`type-${typeValue}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`type-${typeValue}`}
                        className={`flex items-center justify-center h-full p-3 rounded-lg border-2 cursor-pointer transition-all text-center ${
                          formData.propertyType === typeValue
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <span className="font-medium text-foreground">{type}</span>
                      </Label>
                    </div>
                  )
                })}
              </RadioGroup>
            </div>

            {currentConfig.showBedBath && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                  <Select
                    value={formData.bedrooms}
                    onValueChange={(value) => updateFormData("bedrooms", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      {["1", "2", "3", "4", "5", "6+"].map((num) => (
                        <SelectItem key={num} value={num}>{num} {num === "1" ? "Bedroom" : "Bedrooms"}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Number of Bathrooms</Label>
                  <Select
                    value={formData.bathrooms}
                    onValueChange={(value) => updateFormData("bathrooms", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select bathrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      {["1", "1.5", "2", "2.5", "3", "3.5", "4+"].map((num) => (
                        <SelectItem key={num} value={num}>{num} {num === "1" ? "Bathroom" : "Bathrooms"}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {currentConfig.extras.length > 0 && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <Label className="text-foreground">Add-On Services (Optional)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentConfig.extras.map((extra) => (
                    <div
                      key={extra.id}
                      className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.extras.includes(extra.id)
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => toggleExtra(extra.id)}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={formData.extras.includes(extra.id)}
                          onCheckedChange={() => toggleExtra(extra.id)}
                        />
                        <span className="text-foreground">{extra.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{extra.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Date & Time */}
      {step === 3 && (
        <Card className="border-border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="text-card-foreground">Select Date & Time</CardTitle>
            <CardDescription>Choose your preferred cleaning date and time slot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <Label className="text-foreground mb-3 block">Select Date</Label>
                <Calendar
                  mode="single"
                  selected={formData.date}
                  onSelect={(date) => {
                    updateFormData("date", date)
                    updateFormData("timeSlot", "")
                  }}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border border-border"
                />
              </div>
              <div className="flex-1">
                <Label className="text-foreground mb-3 block">Select Time Slot</Label>
                <p className="text-xs text-muted-foreground mb-3">
                  {formData.date?.getDay() === 6
                    ? "Saturday hours: 09:00 am – 02:00 pm"
                    : "Mon–Fri hours: 08:00 am – 05:00 pm"}
                </p>
                <div className="space-y-3">
                  {getTimeSlots(formData.date).map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => updateFormData("timeSlot", slot)}
                      className={`slot-btn w-full p-3 rounded-lg border-2 text-center ${
                        formData.timeSlot === slot
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: Contact Details */}
      {step === 4 && (
        <Card className="border-border animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CardHeader>
            <CardTitle className="text-card-foreground">Your Details</CardTitle>
            <CardDescription>Please provide your contact information and address</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Street Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => updateFormData("address", e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => updateFormData("city", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postalCode">Postal Code *</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => updateFormData("postalCode", e.target.value.replace(/\D/g, '').slice(0, 4))}
                  placeholder="e.g. 1234"
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
              <Textarea
                id="specialInstructions"
                placeholder="Any specific instructions or notes for our cleaning team..."
                value={formData.specialInstructions}
                onChange={(e) => updateFormData("specialInstructions", e.target.value)}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={step === 1}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>

        {step < totalSteps ? (
          <Button onClick={handleNext} disabled={step !== 1 && !canProceed()} className="gap-2">
            {step === 1 ? "Next: Property" : step === 2 ? "Next: Schedule" : "Next: Details"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!canProceed()} className="gap-2">
            Confirm Booking
            <Check className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
