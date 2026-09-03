import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="border-b border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:items-center md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-dark">
            Dojazd nawet do 12 godzin
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">
            Naprawa AGD, elektryk i hydraulik w Krakowie
          </h1>
          <p className="mt-4 max-w-xl text-lg text-stone-600">
            Pralki, zmywarki, suszarki, okapy — naprawa z gwarancją, bez zbędnych
            wymian części. Wszystkie marki: Bosch, Samsung, LG, Beko, Electrolux i inne.
          </p>
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

        <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <div>
            <dt className="text-sm text-stone-500">Naprawa</dt>
            <dd className="text-xl font-bold text-stone-900">z gwarancją</dd>
          </div>
          <div>
            <dt className="text-sm text-stone-500">Przyjazd</dt>
            <dd className="text-xl font-bold text-stone-900">do 12h</dd>
          </div>
          <div>
            <dt className="text-sm text-stone-500">Części</dt>
            <dd className="text-xl font-bold text-stone-900">oryginalne</dd>
          </div>
          <div>
            <dt className="text-sm text-stone-500">Serwis</dt>
            <dd className="text-xl font-bold text-stone-900">pogwarancyjny</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
