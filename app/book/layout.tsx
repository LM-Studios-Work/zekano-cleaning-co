import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Online | Zekano Cleaning Co",
  description: "Book your professional cleaning service online. Choose your service, select a date and time, and get your space sparkling clean.",
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
