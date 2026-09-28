import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book Online | Zenako Cleaning & Property Services | Johannesburg",
  description: "Book your professional cleaning service online with Zenako Cleaning & Property Services Choose your service, select a date and time, and get your space in Johannesburg sparkling clean.",
  alternates: {
    canonical: "/book",
  },
}

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
