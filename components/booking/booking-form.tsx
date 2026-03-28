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
import { Sparkles, Home, Truck, Building2, Bug, Wrench, ChevronLeft, ChevronRight, Check, Search } from "lucide-react"

import { serviceCategories, allServices } from "@/lib/services-data"

const frequencies = [
  { id: "one-time", name: "One-Time", discount: null },
  { id: "weekly", name: "Weekly", discount: "15% off" },
  { id: "bi-weekly", name: "Bi-Weekly", discount: "10% off" },
  { id: "monthly", name: "Monthly", discount: "5% off" },
]

const extras = [
  { id: "inside-fridge", name: "Inside Refrigerator", price: "+R35" },
  { id: "inside-oven", name: "Inside Oven", price: "+R35" },
  { id: "inside-cabinets", name: "Inside Cabinets", price: "+R50" },
  { id: "laundry", name: "Laundry (Wash & Fold)", price: "+R25" },
  { id: "windows", name: "Interior Windows", price: "+R10/window" },
  { id: "garage", name: "Garage Cleaning", price: "+R75" },
]

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
]

interface BookingFormProps {
  onComplete: (data: BookingData) => void
}

export function BookingForm({ onComplete }: BookingFormProps) {
  const [step, setStep] = useState(1)
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
    specialInstructions: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 4

  const updateFormData = (field: keyof BookingData, value: BookingData[keyof BookingData]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
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
        return formData.propertyType !== "" && formData.bedrooms !== "" && formData.bathrooms !== ""
      case 3:
        return formData.date !== undefined && formData.timeSlot !== ""
      case 4:
        return (
          formData.firstName !== "" &&
          formData.lastName !== "" &&
          formData.email !== "" &&
          formData.phone !== "" &&
          formData.address !== "" &&
          formData.city !== ""
        )
      default:
        return false
    }
  }

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    onComplete(formData)
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
        <Card className="border-border">
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
                <SelectTrigger className="w-full text-left h-14 text-base">
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
              
              {formData.service && (() => {
                const selectedService = allServices.find((s) => s.slug === formData.service);
                if (!selectedService) return null;
                const Icon = selectedService.icon;
                return (
                  <div className="mt-6 p-5 rounded-lg bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="rounded-full bg-primary/10 p-3 text-primary shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg mb-1">
                        {selectedService.name}
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
                      className={`flex flex-col items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
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
        <Card className="border-border">
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
                {["House", "Apartment", "Condo", "Office"].map((type) => (
                  <div key={type}>
                    <RadioGroupItem
                      value={type.toLowerCase()}
                      id={`type-${type.toLowerCase()}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`type-${type.toLowerCase()}`}
                      className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        formData.propertyType === type.toLowerCase()
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <span className="font-medium text-foreground">{type}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

            <div className="space-y-3">
              <Label className="text-foreground">Add-On Services (Optional)</Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {extras.map((extra) => (
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
          </CardContent>
        </Card>
      )}

      {/* Step 3: Date & Time */}
      {step === 3 && (
        <Card className="border-border">
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
                  onSelect={(date) => updateFormData("date", date)}
                  disabled={(date) => date < new Date() || date.getDay() === 0}
                  className="rounded-md border border-border"
                />
              </div>
              <div className="flex-1">
                <Label className="text-foreground mb-3 block">Select Time Slot</Label>
                <div className="space-y-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => updateFormData("timeSlot", slot)}
                      className={`w-full p-3 rounded-lg border-2 text-center transition-all ${
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
        <Card className="border-border">
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
          <Button onClick={handleNext} disabled={!canProceed()} className="gap-2">
            {step === 1 ? "Next: Property" : step === 2 ? "Next: Schedule" : "Next: Details"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting} className="gap-2">
            {isSubmitting ? "Booking..." : "Confirm Booking"}
            <Check className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
