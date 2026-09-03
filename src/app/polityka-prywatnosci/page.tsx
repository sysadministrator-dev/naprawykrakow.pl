import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Polityka prywatności | NaprawyKraków",
  description: "Zasady przetwarzania danych osobowych zbieranych przez formularz zgłoszeniowy NaprawyKraków.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-14 text-zinc-700">
          <h1 className="text-3xl font-bold text-zinc-900">Polityka prywatności</h1>
          <p className="mt-4 text-sm text-zinc-500">Ostatnia aktualizacja: wrzesień 2026</p>

          <div className="mt-8 space-y-6 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900">1. Administrator danych</h2>
              <p className="mt-2">
                Administratorem danych osobowych przekazanych przez formularz zgłoszeniowy na tej
                stronie jest usługodawca NaprawyKraków, kontakt: {PHONE_DISPLAY}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">2. Jakie dane zbieramy</h2>
              <p className="mt-2">
                W formularzu zgłoszeniowym zbieramy: imię, numer telefonu, adres e-mail (opcjonalnie),
                adres lub dzielnicę, wybraną usługę oraz opis usterki i preferowany termin wizyty.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">3. Cel i podstawa przetwarzania</h2>
              <p className="mt-2">
                Dane przetwarzane są w celu kontaktu, umówienia i realizacji zgłoszonej usługi
                serwisowej (art. 6 ust. 1 lit. b RODO — wykonanie umowy / działania przed jej
                zawarciem) oraz w celach księgowych, jeśli wymaga tego prawo (art. 6 ust. 1 lit. c
                RODO).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">4. Okres przechowywania</h2>
              <p className="mt-2">
                Dane zgłoszenia przechowujemy przez okres niezbędny do realizacji usługi oraz przez
                okres wymagany przepisami prawa (np. podatkowymi), a następnie są usuwane lub
                anonimizowane.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">5. Twoje prawa</h2>
              <p className="mt-2">
                Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
                przetwarzania, przenoszenia oraz wniesienia sprzeciwu, a także skargi do Prezesa
                Urzędu Ochrony Danych Osobowych. W celu realizacji tych praw skontaktuj się z nami
                telefonicznie: {PHONE_DISPLAY}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">6. Odbiorcy danych</h2>
              <p className="mt-2">
                Dane nie są przekazywane podmiotom trzecim poza dostawcami usług technicznych
                niezbędnych do działania strony i bazy danych (hosting, baza danych).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900">7. Pliki cookies</h2>
              <p className="mt-2">
                Strona wykorzystuje wyłącznie techniczny plik cookie niezbędny do działania panelu
                logowania administratora. Nie stosujemy plików cookies do celów marketingowych ani
                analitycznych.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
