import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | SparkleClean Pro",
  description: "Get in touch with SparkleClean Pro. Call us, email us, or fill out our contact form for a free quote on professional cleaning services.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
