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
        <section className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <p className="mb-3 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary/90">
                Dojazd nawet do 12 godzin
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-zinc-600">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="rounded-lg bg-zinc-900 px-6 py-3 text-base font-semibold text-white transition hover:bg-zinc-800"
                >
                  📞 Zadzwoń: {PHONE_DISPLAY}
                </a>
                <a
                  href="#zamow"
                  className="rounded-lg border-2 border-primary px-6 py-3 text-base font-semibold text-primary/90 transition hover:bg-primary/10"
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
          <h2 className="text-2xl font-bold text-zinc-900">Typowe usterki, które naprawiamy</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {page.symptoms.map((s) => (
              <li key={s} className="flex gap-2 rounded-xl border border-zinc-200 bg-white p-4 text-zinc-700">
                <span className="text-primary">✓</span>
                {s}
              </li>
            ))}
          </ul>

          {page.brands.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-zinc-900">Naprawiamy wszystkie marki</h2>
              <p className="mt-3 text-zinc-600">{page.brands.join(", ")}.</p>
            </div>
          )}
        </section>

        <Reviews />

        <section id="zamow" className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold text-zinc-900">Zamów usługę: {page.name.toLowerCase()}</h2>
            <p className="mt-2 text-zinc-600">
              Wypełnij formularz, a oddzwonimy w celu potwierdzenia terminu wizyty.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
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
