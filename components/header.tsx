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
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}>
              <span className="sr-only">Twitter</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
            </a>
            <a href="https://facebook.com" className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}>
              <span className="sr-only">Facebook</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}>
              <span className="sr-only">Instagram</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white"/><circle cx="17.5" cy="6.5" r="1.5" fill="white"/></svg>
            </a>
            <a href="https://youtube.com" className={`transition-colors duration-300 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-white/70 hover:text-white"}`}>
              <span className="sr-only">YouTube</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            </a>
          </div>

          {/* Right - Contact Info */}
          <div className={`flex items-center gap-6 transition-colors duration-300 ${scrolled ? "text-gray-700" : "text-white/80"}`}>
            <div className="hidden sm:flex items-center gap-1">
              <Phone className="h-3 w-3" style={{ color: "#6fbf00" }} />
              <a href="tel:+18008842234" className="hover:text-green-500 transition-colors">8 800 884 2234</a>
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Phone className="h-3 w-3" style={{ color: "#6fbf00" }} />
              <a href="tel:+18005632240" className="hover:text-green-500 transition-colors">8 800 563 2240</a>
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
              className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-gray-900" : "text-white/90 hover:text-white"}`}
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
