import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Zekano Cleaning Co",
  description: "Get in touch with Zekano Cleaning Co. Call us, email us, or fill out our contact form for a free quote on professional cleaning services.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
