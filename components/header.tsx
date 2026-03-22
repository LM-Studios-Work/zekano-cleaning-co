"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Book Online", href: "/book" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50" : "bg-black/20 backdrop-blur-sm border-b border-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="p-0">
            <span className={`text-xl font-bold transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>Zekano</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 lg:items-center">
          <a href="tel:+1234567890" className={`flex items-center gap-2 text-xs font-medium uppercase transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`}>
            <Phone className="h-3 w-3" />
            (123) 456-7890
          </a>
          <Button asChild variant={scrolled ? "default" : "outline"} className={`text-xs font-medium uppercase tracking-wider ${!scrolled ? "border-white text-white hover:bg-white/20" : ""}`}>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-extrabold text-white">Zekano</span>
                <span className="text-xs text-white/60 ml-1">Cleaning Co</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block rounded-lg px-3 py-2 text-base font-medium ${
                          isActive ? "text-lime-400" : "text-white/80 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6 space-y-4">
                  <p className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="h-4 w-4 text-lime-500" />
                    123 Clean Street, Nashville, TN 37201
                  </p>
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-white/70">
                    <Phone className="h-4 w-4 text-lime-500" />
                    (123) 456-7890
                  </a>
                  <Link
                    href="/book"
                    className="block w-full rounded px-5 py-2.5 text-center text-sm font-semibold text-white"
                    style={{ backgroundColor: "#6fbf00" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
