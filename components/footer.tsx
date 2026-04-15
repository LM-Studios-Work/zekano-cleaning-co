import Link from "next/link"
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "@/components/icons"

const residentialServices = [
  { name: "Standard House Cleaning", href: "/services/standard-house-cleaning" },
  { name: "Deep Cleaning", href: "/services/deep-cleaning" },
  { name: "Move-in/Move-out", href: "/services/move-in-move-out-cleaning" },
]

const commercialServices = [
  { name: "Office Cleaning", href: "/services/office-cleaning" },
  { name: "Small Business Cleaning", href: "/services/small-business-cleaning" },
]

const specializedServices = [
  { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  { name: "Upholstery Cleaning", href: "/services/upholstery-furniture-cleaning" },
  { name: "Mattress Cleaning", href: "/services/mattress-cleaning" },
  { name: "Curtain Cleaning", href: "/services/curtain-cleaning" },
  { name: "Roof Cleaning", href: "/services/roof-cleaning" },
  { name: "Drain Cleaning", href: "/services/drain-cleaning" },
  { name: "Pest Control", href: "/services/pest-control" },
  { name: "Disinfection Services", href: "/services/disinfection-services" },
]


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <span className="text-2xl font-bold">Zenako</span>
              <span className="text-sm opacity-80 ml-1">Cleaning Co.</span>
            </div>
            <p className="text-base lg:text-sm opacity-80 leading-relaxed">
              Professional cleaning services for homes, offices, and commercial properties across Johannesburg.
            </p>
            <div className="flex gap-5">
              <a href="https://facebook.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f text-xl lg:text-lg"></i>
              </a>
              <a href="https://instagram.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <i className="fa-brands fa-instagram text-xl lg:text-lg"></i>
              </a>
              <a href="https://twitter.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <i className="fa-brands fa-twitter text-xl lg:text-lg"></i>
              </a>
              <a href="https://youtube.com" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="YouTube">
                <i className="fa-brands fa-youtube text-xl lg:text-lg"></i>
              </a>
            </div>
          </div>

          {/* Services - Organized by Category */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {/* Residential */}
              <div>
                <h4 className="text-xs uppercase font-semibold opacity-70 mb-2">Residential</h4>
                <ul className="space-y-1 lg:space-y-1">
                  {residentialServices.map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Commercial */}
              <div>
                <h4 className="text-xs uppercase font-semibold opacity-70 mb-2">Commercial</h4>
                <ul className="space-y-1 lg:space-y-1">
                  {commercialServices.map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specialized Services + Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More Services</h3>
            <ul className="space-y-1 lg:space-y-1 mb-6">
              {specializedServices.slice(0, 5).map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="text-sm font-semibold opacity-90 hover:opacity-100 transition-opacity">
              View all services →
            </Link>
          </div>

          {/* Service Areas + Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-1 lg:space-y-1">
                {["Sandton", "Randburg", "Fourways", "Midrand", "Bryanston", "Johannesburg North"].map((area) => (
                  <li key={area} className="text-sm opacity-80 flex items-center gap-2">
                    <MapPinIcon className="h-3 w-3 lg:h-3 lg:w-3 shrink-0" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 lg:space-y-2">
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  <a href="tel:+27844020733" className="text-sm opacity-80 hover:opacity-100 transition-opacity">084 402 0733</a>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 shrink-0" />
                  <a href="mailto:info@zenakocleaning.co.za" className="text-sm opacity-80 hover:opacity-100 transition-opacity">info@zenakocleaning.co.za</a>
                </li>
                <li className="flex items-start gap-2">
                  <ClockIcon className="h-4 w-4 shrink-0 mt-0.5" />
                  <span className="text-sm opacity-80">Mon-Fri: 8am-5pm<br />Sat: 9am-2pm</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm opacity-80">
            &copy; {new Date().getFullYear()} Zenako Cleaning Co. Johannesburg, South Africa.
          </p>
        </div>
      </div>
    </footer>
  )
}
