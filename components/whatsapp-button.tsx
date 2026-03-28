"use client"

export function WhatsAppButton() {
  const phoneNumber = "27844020733"
  const message = "Hello! I'm interested in Zenako Cleaning Co. services. Can I get a free quote?"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors duration-200 hover:scale-110"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  )
}
