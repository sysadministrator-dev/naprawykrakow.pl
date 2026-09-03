import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import OrderForm from "@/components/OrderForm";
import Reviews from "@/components/Reviews";
import type { ServicePage } from "@/lib/service-pages";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

export default function ServiceLandingTemplate({ page }: { page: ServicePage }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="border-b border-stone-200 bg-stone-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-dark">
                Dojazd nawet do 12 godzin
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-stone-600">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-full bg-stone-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-stone-800"
                >
                  📞 Zadzwoń: {PHONE_DISPLAY}
                </a>
                <a
                  href="#zamow"
                  className="rounded-full border-2 border-accent px-6 py-3 text-base font-semibold text-accent-dark transition hover:bg-accent/10"
                >
                  Zamów wizytę online
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-48 w-48">
              <Image src={page.image} alt={page.name} fill className="object-contain" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-2xl font-bold text-stone-900">Typowe usterki, które naprawiamy</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.symptoms.map((s) => (
              <li key={s} className="flex gap-2 rounded-xl border border-stone-200 bg-white p-4 text-stone-700">
                <span className="text-accent">✓</span>
                {s}
              </li>
            ))}
          </ul>

          {page.brands.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-stone-900">Naprawiamy wszystkie marki</h2>
              <p className="mt-3 text-stone-600">{page.brands.join(", ")}.</p>
            </div>
          )}
        </section>

        <Reviews />

        <section id="zamow" className="bg-stone-50 py-16">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold text-stone-900">Zamów usługę: {page.name.toLowerCase()}</h2>
            <p className="mt-2 text-stone-600">
              Wypełnij formularz, a oddzwonimy w celu potwierdzenia terminu wizyty.
            </p>
            <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <OrderForm defaultService={page.serviceValue} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
