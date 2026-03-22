"use client"

export function WhatsAppButton() {
  const phoneNumber = "27844020733" // South African WhatsApp number
  const message = "Hello! I'm interested in your cleaning services."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.537 0-2.852-.727-2.852-1.818 0-1.091 1.315-1.818 2.852-1.818 1.536 0 2.853.727 2.853 1.818 0 1.091-1.317 1.818-2.853 1.818M2.092 21h15.816c.924 0 1.678-.754 1.678-1.678V4.678c0-.924-.754-1.678-1.678-1.678H2.092c-.924 0-1.677.754-1.677 1.678v14.644c0 .924.753 1.678 1.677 1.678z"/>
      </svg>
    </a>
  )
}
