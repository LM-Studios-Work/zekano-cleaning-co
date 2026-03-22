"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-transparent border-b border-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>Zekano</span>
            <span className={`text-sm ml-1 transition-colors duration-300 ${scrolled ? "text-muted-foreground" : "text-white/80"}`}>Cleaning Co</span>
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
              className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a href="tel:+1234567890" className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"}`}>
            <Phone className="h-4 w-4" />
            (123) 456-7890
          </a>
          <Button asChild variant={scrolled ? "default" : "outline"} className={!scrolled ? "border-white text-white hover:bg-white hover:text-primary" : ""}>
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-foreground/20" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-2xl font-bold text-primary">Zekano</span>
                <span className="text-sm text-muted-foreground ml-1">Cleaning Co</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-base font-medium text-foreground">
                    <Phone className="h-5 w-5" />
                    (123) 456-7890
                  </a>
                  <Button asChild className="w-full">
                    <Link href="/book" onClick={() => setMobileMenuOpen(false)}>Book Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
