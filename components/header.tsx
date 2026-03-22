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
  const [desktopPanelOpen, setDesktopPanelOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when panels are open
  useEffect(() => {
    if (mobileMenuOpen || desktopPanelOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileMenuOpen, desktopPanelOpen])

  // On non-home pages, always use "scrolled" (white) style
  const useWhiteStyle = !isHomePage || scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${useWhiteStyle ? "shadow-lg" : ""}`}>
      {/* Top Tier - Social icons left, Address + Phone right */}
      {/* Hides on scroll for a cleaner compact header */}
      <div className={`transition-all duration-300 border-b overflow-hidden ${
        useWhiteStyle
          ? "h-0 opacity-0 border-transparent"
          : "h-12 opacity-100 bg-black/32 backdrop-blur-sm border-white/10"
      }`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-12">
          {/* Left - Social Icons */}
          <div className="flex items-center gap-5">
            <a href="https://twitter.com" className="text-white/80 hover:text-white transition-colors" title="Twitter">
              <i className="fa-brands fa-twitter text-base"></i>
            </a>
            <a href="https://facebook.com" className="text-white/80 hover:text-white transition-colors" title="Facebook">
              <i className="fa-brands fa-facebook-f text-base"></i>
            </a>
            <a href="https://instagram.com" className="text-white/80 hover:text-white transition-colors" title="Instagram">
              <i className="fa-brands fa-instagram text-base"></i>
            </a>
            <a href="https://youtube.com" className="text-white/80 hover:text-white transition-colors" title="YouTube">
              <i className="fa-brands fa-youtube text-base"></i>
            </a>
          </div>

          {/* Right - Address & Phone */}
          <div className="flex items-center gap-10">
            {/* Address - hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <span className="flex items-center justify-center h-9 w-9 rounded-full border-2 border-[#6fbf00] text-[#6fbf00]">
                <i className="fa-solid fa-location-dot text-sm"></i>
              </span>
              <div className="text-sm leading-snug">
                <span className="block font-medium text-white">Zekano Cleaning Co</span>
                <span className="block text-xs text-white/70">Johannesburg, South Africa</span>
              </div>
            </div>

            {/* Phone */}
            <a href="tel:+27844020733" className="text-sm md:text-base font-semibold hover:text-[#6fbf00] transition-colors text-white">
              084 402 0733
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Tier - Logo, Navigation, Search/Menu */}
      <nav className={`transition-all duration-300 ${
        useWhiteStyle
          ? "bg-white/95 backdrop-blur-sm shadow-md"
          : "bg-black/32 backdrop-blur-sm"
      }`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/placeholder-logo.png"
              alt="Zekano Cleaning Co"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col">
              <span className={`text-2xl font-extrabold leading-none tracking-tight transition-colors duration-300 ${
                useWhiteStyle ? "text-gray-800" : "text-white"
              }`}>
                Zekano
              </span>
              <span className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                useWhiteStyle ? "text-gray-400" : "text-white/60"
              }`}>Cleaning services</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <button className={`transition-colors p-2 ${
              useWhiteStyle ? "text-gray-500 hover:text-gray-800" : "text-white/70 hover:text-white"
            }`}>
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button
              type="button"
              className={`p-2.5 transition-colors ${useWhiteStyle ? "text-gray-800" : "text-white"}`}
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
                      : useWhiteStyle
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-white/80 hover:text-white"
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
            <div className={`h-6 w-px ${useWhiteStyle ? "bg-gray-200" : "bg-white/20"}`} aria-hidden="true" />
            <button className={`transition-colors p-2 ${
              useWhiteStyle ? "text-gray-500 hover:text-gray-800" : "text-white/70 hover:text-white"
            }`}>
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <button
              className={`transition-colors p-2 ${
                useWhiteStyle ? "text-gray-500 hover:text-gray-800" : "text-white/70 hover:text-white"
              }`}
              onClick={() => setDesktopPanelOpen(true)}
            >
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Side Panel (ClenGo style) */}
      <div
        className={`hidden lg:block fixed inset-0 z-[60] transition-opacity duration-300 ${
          desktopPanelOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0 bg-black/50" onClick={() => setDesktopPanelOpen(false)} />
        <div
          className={`fixed inset-y-0 right-0 z-[61] w-[400px] bg-white shadow-2xl overflow-y-auto transform transition-transform duration-300 ${
            desktopPanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button */}
          <button
            onClick={() => setDesktopPanelOpen(false)}
            className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="px-10 py-12 text-center">
            {/* Profile / Logo area */}
            <div className="flex justify-center mb-6">
              <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-gray-100 bg-gray-100">
                <Image
                  src="/placeholder-logo.png"
                  alt="Zekano Cleaning Co"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We do great work in our business so that you can always see the quality of our work. Professional cleaning services in Johannesburg.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mb-10">
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-600 transition-colors" title="Twitter">
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-gray-600 transition-colors" title="Facebook">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-gray-600 transition-colors" title="Instagram">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-gray-600 transition-colors" title="YouTube">
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 mb-8" />

            {/* Contact Us */}
            <div className="text-left">
              <h4 className="font-bold text-gray-800 text-base mb-5">Contact Us:</h4>

              <a href="tel:+27844020733" className="flex items-center gap-3 mb-4 text-gray-600 hover:text-[#6fbf00] transition-colors">
                <i className="fa-solid fa-phone text-[#6fbf00]"></i>
                <span className="font-semibold">084 402 0733</span>
              </a>

              <div className="flex items-start gap-3 mb-4 text-gray-500 text-sm">
                <i className="fa-solid fa-clock text-[#6fbf00] mt-0.5"></i>
                <div>
                  <p>Mon-Fri: 08:00 am &ndash; 05:00 pm</p>
                  <p>Sat: 09:00 am &ndash; 02:00 pm</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-gray-500 text-sm">
                <i className="fa-solid fa-location-dot text-[#6fbf00] mt-0.5"></i>
                <p>Johannesburg, South Africa</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-10 py-6 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Zekano Cleaning Co. All Rights Reserved.</p>
          </div>
        </div>
      </div>

      {/* Mobile menu - stops after content, see-through behind */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
        <div
          className={`fixed top-0 right-0 left-0 z-[61] bg-white shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <Image
                src="/placeholder-logo.png"
                alt="Zekano"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-extrabold text-gray-800">Zekano</span>
            </Link>
            <button
              type="button"
              className="rounded-md p-2 text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <div className="px-6 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-base font-medium border-b border-gray-50 ${
                    isActive
                      ? "text-[#6fbf00]"
                      : "text-gray-700 hover:text-[#6fbf00]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Contact & CTA */}
          <div className="px-6 py-4 border-t border-gray-100 space-y-3">
            <a href="tel:+27844020733" className="flex items-center gap-3 text-gray-700 font-medium">
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
    </header>
  )
}
