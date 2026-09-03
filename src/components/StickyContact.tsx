import { PHONE, WHATSAPP_URL } from "@/lib/contact";

export default function StickyContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105"
      >
        💬
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Zadzwoń"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl text-white shadow-lg transition hover:scale-105"
      >
        📞
      </a>
    </div>
  );
}
