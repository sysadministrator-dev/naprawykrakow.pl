import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.2fr_1fr] md:items-center md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary/90">
            Dojazd nawet do 12 godzin
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Naprawa AGD, elektryk i hydraulik w Krakowie
          </h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600">
            Pralki, zmywarki, suszarki, okapy — naprawa z gwarancją, bez zbędnych
            wymian części. Wszystkie marki: Bosch, Samsung, LG, Beko, Electrolux i inne.
          </p>
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

        <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div>
            <dt className="text-sm text-zinc-500">Naprawa</dt>
            <dd className="text-xl font-bold text-zinc-900">z gwarancją</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Przyjazd</dt>
            <dd className="text-xl font-bold text-zinc-900">do 12h</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Części</dt>
            <dd className="text-xl font-bold text-zinc-900">oryginalne</dd>
          </div>
          <div>
            <dt className="text-sm text-zinc-500">Serwis</dt>
            <dd className="text-xl font-bold text-zinc-900">pogwarancyjny</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
