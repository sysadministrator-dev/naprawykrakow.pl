import Link from "next/link";
import { PHONE, PHONE_DISPLAY, WHATSAPP_URL, TELEGRAM_URL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">
              Naprawy<span className="text-accent">Kraków</span>
            </p>
            <p className="mt-2 text-sm">Serwis AGD, elektryk i hydraulik w Krakowie i okolicach.</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Kontakt</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href={`tel:${PHONE}`} className="hover:text-white">📞 {PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WHATSAPP_URL} className="hover:text-white" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li>
                <a href={TELEGRAM_URL} className="hover:text-white" target="_blank" rel="noopener noreferrer">Telegram</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Informacje</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/uslugi" className="hover:text-white">Usługi</Link></li>
              <li><Link href="/polityka-prywatnosci" className="hover:text-white">Polityka prywatności</Link></li>
              <li><Link href="/admin/login" className="hover:text-white">Panel administratora</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-xs text-stone-500">
          © {new Date().getFullYear()} NaprawyKraków. Jesteśmy zewnętrznym serwisem pogwarancyjnym.
        </p>
      </div>
    </footer>
  );
}
