import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Zenako Cleaning Co. | Johannesburg",
  description: "Get in touch with Zenako Cleaning Co. for professional cleaning services in Johannesburg. Call us, email us, WhatsApp, or fill out our contact form for a free quote. Serving Sandton, Randburg, Fourways, Midrand, Bryanston.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
