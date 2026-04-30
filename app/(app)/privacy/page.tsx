import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Privacy Policy | Zenako Cleaning Co.",
  description: "Learn how Zenako Cleaning Co. collects, uses, and protects your personal information in compliance with POPIA.",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>Legal</span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Privacy <span style={{ color: "#1A9AD2" }}>Policy</span>
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">Last Updated: 21 April 2026</p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="prose prose-slate max-w-none space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to Zenako Cleaning Co. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services, in accordance with the Protection of Personal Information Act (POPIA) of South Africa.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you request a quote, book a service, or contact us through our website, we may collect the following personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Full Name</li>
                  <li>Contact Number</li>
                  <li>Email Address</li>
                  <li>Physical Address (for cleaning service delivery)</li>
                  <li>Details regarding your property and specific cleaning requirements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">How We Collect Your Data</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses direct-to-WhatsApp forms. When you submit a booking or contact form on our site, your information is formatted and securely transferred to your local WhatsApp application, allowing you to send the message directly to our official business number. We do not store this information in a website database.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information you provide via WhatsApp to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Provide accurate cleaning quotes.</li>
                  <li>Schedule and fulfill your requested cleaning services.</li>
                  <li>Communicate with you regarding your booking, arrival times, or changes.</li>
                  <li>Issue invoices and facilitate payments.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Data Sharing and Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. Your data is strictly used by Zenako Cleaning Co. staff and management to deliver our services. Since communications are handled via WhatsApp, your data benefits from WhatsApp&apos;s standard end-to-end encryption during transit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Under POPIA, you have the right to request access to the personal information we hold about you, ask us to update or correct inaccuracies, or request the deletion of your data from our business records. To exercise these rights, please contact us directly.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-6">
                <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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
                    <a href="tel:+27657018482" className="hover:underline" style={{ color: "#1A9AD2" }}>
                      065 701 8482
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
