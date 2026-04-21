import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Terms & Conditions | Zenako Cleaning Co.",
  description: "Read the Terms and Conditions governing cleaning services provided by Zenako Cleaning Co. across Johannesburg.",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>Legal</span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Terms &amp; <span style={{ color: "#1A9AD2" }}>Conditions</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Last Updated: 21 April 2026</p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="space-y-10">

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By booking a cleaning service with Zenako Cleaning Co., you agree to be bound by the following Terms and Conditions. Please read them carefully before confirming your booking.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Services Provided</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Zenako Cleaning Co. provides professional residential, commercial, and specialized cleaning services across Johannesburg and surrounding areas. The specific scope of work will be agreed upon during the booking process via WhatsApp or email.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Bookings and Quotes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All bookings initiated through our website are considered requests until confirmed by our team via WhatsApp or email. Quotes provided are based on the property details and requirements you share. We reserve the right to adjust the final price if the actual condition of the property differs significantly from the description provided.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Cancellations and Rescheduling</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand that plans change. If you need to cancel or reschedule your cleaning appointment, please provide at least 24 hours&apos; notice. Cancellations made with less than 24 hours&apos; notice may be subject to a late cancellation fee.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Access to the Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The client must ensure our cleaning team has access to the property at the scheduled time. This includes providing keys, gate codes, or ensuring someone is present to grant entry. If our team cannot access the property upon arrival, a call-out fee may apply.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Health and Safety</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our staff&apos;s safety is a priority. We reserve the right to refuse or terminate a service if the property presents a health hazard, severe sanitary risks, or a threat of physical harm to our team.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Liability and Damages</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our team is trained to handle your property with the utmost care. However, in the unlikely event that damage occurs due to our negligence, it must be reported to Zenako Cleaning Co. within 24 hours of the service completion. We will not be held liable for damage to items that were already broken, improperly secured, or highly fragile items left out in the open.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Payments</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be discussed and agreed upon during your booking confirmation. Full payment is expected upon completion of the service unless a prior arrangement (such as a monthly contract for commercial spaces) has been made.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">9. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For any questions regarding these terms, please reach out to us:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    <a href="mailto:info@zenakocleaning.co.za" className="hover:underline" style={{ color: "#1A9AD2" }}>
                      info@zenakocleaning.co.za
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-foreground">Phone / WhatsApp:</span>{" "}
                    <a href="tel:+27844020733" className="hover:underline" style={{ color: "#1A9AD2" }}>
                      084 402 0733
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
