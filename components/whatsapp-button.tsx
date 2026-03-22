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
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors duration-200 font-medium text-xs"
      aria-label="Contact us on WhatsApp"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.077 2.79-5.077 5.332 0 1.759.675 3.276 1.944 4.471L6.5 19.5l4.844-1.386c1.358.853 2.723 1.109 3.687 1.109 3.181 0 5.077-2.79 5.077-5.332 0-3.542-2.021-5.332-5.077-5.332zm0 8.817c-.981 0-1.946-.268-2.667-.747l-.192-.12-1.985.567.59-1.962-.123-.192c-.535-.857-.857-1.831-.857-2.857 0-2.322 1.534-4.157 3.234-4.157 1.756 0 3.233 1.835 3.233 4.157 0 2.322-1.477 4.144-3.234 4.144z"/></svg>
      <span>Chat</span>
    </a>
  )
}
