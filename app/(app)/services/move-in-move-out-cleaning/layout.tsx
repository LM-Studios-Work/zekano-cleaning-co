import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Move-In & Move-Out Cleaning in Johannesburg | Zenako",
  description:
    "Professional move-in and move-out cleaning services in Johannesburg. Get your old or new property spotless with Zenako Cleaning Co.",
  alternates: {
    canonical: "/services/move-in-move-out-cleaning",
  },
}

export default function MoveInMoveOutCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
