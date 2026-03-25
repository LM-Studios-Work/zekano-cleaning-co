import Link from "next/link"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

const services = [
  { name: "Standard House Cleaning", href: "/services#residential-cleaning" },
  { name: "Deep Cleaning", href: "/services#residential-cleaning" },
  { name: "Move-in/Move-out", href: "/services#residential-cleaning" },
  { name: "Office Cleaning", href: "/services#commercial-cleaning" },
  { name: "Upholstery & Fabric", href: "/services#upholstery-cleaning" },
  { name: "Specialised Services", href: "/services#specialised-cleaning" },
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
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-bold">Zenako</span>
              <span className="text-sm opacity-80 ml-1">Cleaning Co.</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Professional cleaning services for homes and businesses in Johannesburg and surrounding areas. We bring sparkle to every space we touch.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="https://instagram.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a href="https://twitter.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <i className="fa-brands fa-twitter text-lg"></i>
              </a>
              <a href="https://youtube.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="YouTube">
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-3">Service Areas</h3>
            <ul className="space-y-1">
              {["Sandton", "Randburg", "Fourways", "Midrand", "Bryanston", "Johannesburg North"].map((area) => (
                <li key={area} className="text-sm opacity-80 flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+27844020733" className="text-sm opacity-80 hover:opacity-100 transition-opacity">084 402 0733</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:info@zekanocleaningco.com" className="text-sm opacity-80 hover:opacity-100 transition-opacity">info@zekanocleaningco.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">Mon-Sat: 7AM - 8PM<br />Sun: 9AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm opacity-80">
            &copy; {new Date().getFullYear()} Zenako Cleaning Co. All rights reserved. | Professional cleaning services in Johannesburg, South Africa.
          </p>
        </div>
      </div>
    </footer>
  )
}
