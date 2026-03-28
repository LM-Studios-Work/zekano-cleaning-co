import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Online | Zenako Cleaning Co. | Johannesburg",
  description: "Book your professional cleaning service online with Zenako Cleaning Co. Choose your service, select a date and time, and get your space in Johannesburg sparkling clean.",
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
