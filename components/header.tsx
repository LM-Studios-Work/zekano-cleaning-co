"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, MapPin, Phone } from "lucide-react"
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Book Online", href: "/book" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Top bar: social icons + address + phone */}
      <div className={`transition-all duration-300 border-b border-white/10 ${scrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-black/40 backdrop-blur-[3px]"}`}>
        <div className="flex w-full items-center justify-between px-6 py-2.5 lg:px-10">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="text-white/60 hover:text-white transition-colors">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Facebook" className="text-white/60 hover:text-white transition-colors">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/60 hover:text-white transition-colors">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-white/60 hover:text-white transition-colors">
              <Youtube className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Address + Phone */}
          <div className="hidden md:flex items-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-lime-500" />
              123 Clean Street, Nashville, TN 37201
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-lime-500" />
              (123) 456-7890
            </span>
          </div>
        </div>
      </div>

      {/* Main nav: logo + links */}
      <nav className={`transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-black/40 backdrop-blur-[3px]"}`}>
      <div className="flex w-full items-center justify-between px-6 py-7 lg:px-10">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-xl font-extrabold text-white">Zekano</span>
            <span className="text-xs text-white/60">Cleaning Co</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-lime-500" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Book Now CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/book"
            className="rounded px-5 py-2 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#6fbf00" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5ea800")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6fbf00")}
          >
            Book Now
          </Link>
        </div>
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
