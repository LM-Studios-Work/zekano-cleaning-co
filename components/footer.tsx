import Link from "next/link"
import Image from "next/image"
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "@/components/icons"

const services = [
  { name: "Standard House Cleaning", href: "/services/standard-house-cleaning" },
  { name: "Deep Cleaning", href: "/services/deep-cleaning" },
  { name: "Move-in/Move-out", href: "/services/move-in-move-out-cleaning" },
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Pest Control", href: "/services/pest-control" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Book Online", href: "/book" },
  { name: "Contact", href: "/contact" },
  { name: "Get a Free Quote", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.85fr_0.85fr_1.4fr] xl:gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/footer logo.png"
                alt="Zenako Cleaning & Property Services"
                width={790}
                height={316}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-base lg:text-sm opacity-80 leading-relaxed">
              Professional cleaning services for homes, offices, and commercial properties across Johannesburg.
            </p>
            <div className="flex gap-5">
              <a href="https://www.facebook.com/profile.php?id=61579543874261" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-xl lg:text-lg"></i>
              </a>
              <a href="https://www.instagram.com/zenakocleaning/" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-xl lg:text-lg"></i>
              </a>
              <a href="https://www.tiktok.com/@zenakocleaningco_" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <i className="fa-brands fa-tiktok text-xl lg:text-lg"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCBeVq9nY_xNdawsrMitiALQ" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fa-brands fa-youtube text-xl lg:text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/zenako-cleaning-co/about/" className="opacity-80 hover:opacity-100 transition-opacity" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in text-xl lg:text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 lg:space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-base lg:text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 lg:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base lg:text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 lg:space-y-1">
              {["Sandton", "Randburg", "Fourways", "Midrand", "Bryanston", "Johannesburg"].map((area) => (
                <li key={area} className="text-base lg:text-sm opacity-80 flex items-center gap-2 lg:gap-1.5">
                  <MapPinIcon className="h-4 w-4 lg:h-3 lg:w-3 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 lg:space-y-3">
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0" />
                <a href="tel:+27657018482" className="text-base lg:text-sm opacity-80 hover:opacity-100 transition-opacity">065 701 8482</a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="h-5 w-5 shrink-0" />
                <a href="mailto:info@zenakocleaning.co.za" className="text-base lg:text-sm opacity-80 hover:opacity-100 transition-opacity">info@zenakocleaning.co.za</a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="text-base lg:text-sm opacity-80 space-y-1">
                  <p className="whitespace-nowrap">Mon-Fri: 08:00 am to 05:00 pm</p>
                  <p className="whitespace-nowrap">Sat: 09:00 am to 02:00 pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Zenako Cleaning & Property Services Johannesburg, South Africa.
          </p>
          <div className="flex items-center gap-4 text-sm opacity-80">
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </Link>
            <span className="opacity-40">|</span>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
