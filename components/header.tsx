"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md" : "bg-black/20 backdrop-blur-md"}`}>
      {/* Top Tier - Contact & Social Info */}
      <div className={`border-b transition-colors duration-300 ${scrolled ? "border-gray-200/50" : "border-white/10"}`}>
        <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8 flex items-center justify-between text-xs">
          {/* Left - Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" className={`transition-colors duration-300 p-1.5 hover:bg-white/10 rounded-lg ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`} title="Facebook">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com" className={`transition-colors duration-300 p-1.5 hover:bg-white/10 rounded-lg ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`} title="Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 12c0 1.604-.65 3.054-1.702 4.107-1.053 1.053-2.503 1.702-4.107 1.702-1.604 0-3.054-.65-4.107-1.702-1.053-1.053-1.702-2.503-1.702-4.107 0-1.604.65-3.054 1.702-4.107 1.053-1.053 2.503-1.702 4.107-1.702 1.604 0 3.054.65 4.107 1.702 1.053 1.053 1.702 2.503 1.702 4.107m1.44-4.209c0 .375-.304.679-.679.679s-.679-.304-.679-.679.304-.679.679-.679.679.304.679.679m-2.916-1.696c-1.311-1.311-3.122-2.122-5.125-2.122s-3.814.811-5.125 2.122c-1.311 1.311-2.122 3.122-2.122 5.125s.811 3.814 2.122 5.125c1.311 1.311 3.122 2.122 5.125 2.122s3.814-.811 5.125-2.122c1.311-1.311 2.122-3.122 2.122-5.125s-.811-3.814-2.122-5.125"/></svg>
            </a>
            <a href="https://twitter.com" className={`transition-colors duration-300 p-1.5 hover:bg-white/10 rounded-lg ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`} title="Twitter">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="https://youtube.com" className={`transition-colors duration-300 p-1.5 hover:bg-white/10 rounded-lg ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`} title="YouTube">
              <span className="sr-only">YouTube</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Right - Contact Info */}
          <div className={`flex items-center gap-6 transition-colors duration-300 ${scrolled ? "text-gray-700" : "text-white/80"}`}>
            <div className="hidden sm:flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <a href="tel:+27844020733" className="hover:text-white transition-colors">0844 020 733</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier - Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="p-0">
            <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>Zekano</span>
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

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 !bg-transparent ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <button className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}>
            <Menu className="h-5 w-5" />
          </button>
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
                  <a href="tel:+27844020733" className="flex items-center gap-2 text-sm text-white/70">
                    <Phone className="h-4 w-4" />
                    0844 020 733
                  </a>
                  <Link
                    href="/book"
                    className="block w-full rounded px-5 py-2.5 text-center text-sm font-semibold text-white bg-gray-700 hover:bg-gray-600"
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
