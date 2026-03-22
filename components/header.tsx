"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

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
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-sm" : "bg-transparent"}`}>
      {/* Top Tier - Address, Phone & Social */}
      <div className={`border-b transition-colors duration-300 ${scrolled ? "border-white/10" : "border-white/20"}`}>
        <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8 flex items-center justify-between">
          {/* Left - Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" className="text-white/70 hover:text-white transition-colors" title="Twitter">
              <i className="fa-brands fa-twitter text-sm"></i>
            </a>
            <a href="https://facebook.com" className="text-white/70 hover:text-white transition-colors" title="Facebook">
              <i className="fa-brands fa-facebook-f text-sm"></i>
            </a>
            <a href="https://instagram.com" className="text-white/70 hover:text-white transition-colors" title="Instagram">
              <i className="fa-brands fa-instagram text-sm"></i>
            </a>
            <a href="https://youtube.com" className="text-white/70 hover:text-white transition-colors" title="YouTube">
              <i className="fa-brands fa-youtube text-sm"></i>
            </a>
          </div>

          {/* Right - Address & Phone */}
          <div className="hidden sm:flex items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-lime-400 text-lime-400">
                <i className="fa-solid fa-location-dot text-xs"></i>
              </span>
              <div className="text-xs leading-tight">
                <span className="block">Zekano Cleaning Co</span>
                <span className="block text-white/60">Johannesburg, South Africa</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-lime-400 text-lime-400">
                <i className="fa-solid fa-phone text-xs"></i>
              </span>
              <div className="text-xs leading-tight">
                <a href="tel:+27844020733" className="block hover:text-white transition-colors font-semibold">0844 020 733</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier - Logo & Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="p-0 flex items-center gap-3">
            <div className="h-10 w-10 bg-lime-400 rounded flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">Z</span>
            </div>
            <div>
              <span className="text-xl font-bold text-lime-400 block leading-none">Zekano</span>
              <span className="text-xs text-white/60 tracking-wide">Cleaning services</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-1 lg:items-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium px-5 py-2.5 transition-colors duration-300 ${
                    isActive ? "text-lime-400" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-5 right-5 h-0.5 bg-lime-400" aria-hidden="true" />
                  )}
                </Link>
              </div>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <button className="text-white/70 hover:text-white transition-colors">
            <i className="fa-solid fa-magnifying-glass text-base"></i>
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm">
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
                          isActive ? "text-lime-400 bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6 space-y-4">
                  <a href="tel:+27844020733" className="flex items-center gap-2 text-sm text-white/70">
                    <i className="fa-solid fa-phone text-sm"></i>
                    0844 020 733
                  </a>
                  <Link
                    href="/book"
                    className="block w-full rounded px-5 py-2.5 text-center text-sm font-semibold bg-lime-400 hover:bg-lime-500 text-gray-900"
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
