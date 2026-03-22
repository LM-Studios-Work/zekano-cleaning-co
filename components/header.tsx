"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Book Online", href: "/book" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      {/* Top Tier - Social icons left, Address + Phone right */}
      <div className={`transition-colors duration-300 ${scrolled ? "bg-gray-800" : "bg-white/10 backdrop-blur-sm"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-12">
          {/* Left - Social Icons */}
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" className={`transition-colors hover:opacity-100 ${scrolled ? "text-white/70 hover:text-white" : "text-white/80 hover:text-white"}`} title="Twitter">
              <i className="fa-brands fa-twitter text-base"></i>
            </a>
            <a href="https://facebook.com" className={`transition-colors hover:opacity-100 ${scrolled ? "text-white/70 hover:text-white" : "text-white/80 hover:text-white"}`} title="Facebook">
              <i className="fa-brands fa-facebook-f text-base"></i>
            </a>
            <a href="https://instagram.com" className={`transition-colors hover:opacity-100 ${scrolled ? "text-white/70 hover:text-white" : "text-white/80 hover:text-white"}`} title="Instagram">
              <i className="fa-brands fa-instagram text-base"></i>
            </a>
            <a href="https://youtube.com" className={`transition-colors hover:opacity-100 ${scrolled ? "text-white/70 hover:text-white" : "text-white/80 hover:text-white"}`} title="YouTube">
              <i className="fa-brands fa-youtube text-base"></i>
            </a>
          </div>

          {/* Right - Address & Phone */}
          <div className="hidden md:flex items-center gap-10">
            {/* Address */}
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full border-2 border-[#6fbf00] text-[#6fbf00]">
                <i className="fa-solid fa-location-dot text-sm"></i>
              </span>
              <div className="text-sm leading-snug">
                <span className={`block font-medium ${scrolled ? "text-white" : "text-white"}`}>Zekano Cleaning Co</span>
                <span className={`block text-xs ${scrolled ? "text-white/60" : "text-white/70"}`}>Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full border-2 border-[#6fbf00] text-[#6fbf00]">
                <i className="fa-solid fa-phone text-sm"></i>
              </span>
              <a href="tel:+27844020733" className={`text-base font-bold hover:text-[#6fbf00] transition-colors ${scrolled ? "text-white" : "text-white"}`}>
                084 402 0733
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier - Logo, Navigation, Search/Menu */}
      <nav className={`transition-colors duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-white/95 backdrop-blur-sm"}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo - Tall and prominent like ClenGo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/placeholder-logo.png"
              alt="Zekano Cleaning Co"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold leading-none tracking-tight" style={{ color: "#1B9FD9" }}>
                Zekano
              </span>
              <span className="text-xs font-medium text-gray-500 tracking-wide">Cleaning services</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>

          {/* Desktop Navigation - centered, well-spaced */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-base font-medium px-5 py-6 transition-colors duration-200 ${
                    isActive
                      ? "text-[#6fbf00]"
                      : "text-gray-700 hover:text-[#6fbf00]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-4 left-5 right-5 h-0.5 bg-[#6fbf00]" aria-hidden="true" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right side - Search + Hamburger with divider */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <div className="h-6 w-px bg-gray-300" aria-hidden="true" />
            <button className="text-gray-600 hover:text-[#1B9FD9] transition-colors p-2">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button className="text-gray-600 hover:text-[#1B9FD9] transition-colors p-2">
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-extrabold" style={{ color: "#1B9FD9" }}>Zekano</span>
                <span className="text-xs text-gray-500">Cleaning Co</span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`block rounded-lg px-4 py-3 text-base font-medium ${
                          isActive
                            ? "text-[#6fbf00] bg-gray-50"
                            : "text-gray-700 hover:text-[#6fbf00] hover:bg-gray-50"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6 space-y-4">
                  <a href="tel:+27844020733" className="flex items-center gap-3 text-base text-gray-700 font-medium">
                    <span className="flex items-center justify-center h-8 w-8 rounded-full border-2 border-[#6fbf00] text-[#6fbf00]">
                      <i className="fa-solid fa-phone text-xs"></i>
                    </span>
                    084 402 0733
                  </a>
                  <Link
                    href="/book"
                    className="block w-full rounded-lg px-5 py-3 text-center text-base font-semibold text-white"
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
