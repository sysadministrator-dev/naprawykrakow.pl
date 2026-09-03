import Image from "next/image";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ImpactBento() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Dlaczego warto nas wybrać
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Pomogliśmy setkom mieszkańców Krakowa naprawić sprzęt szybko, uczciwie i bez
          zbędnych kosztów.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Big card */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 lg:row-span-2">
          <span className="inline-block rounded-lg bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Serwis AGD
          </span>
          <h3 className="mt-5 text-3xl font-extrabold uppercase leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            Naprawa bez niespodzianek.
          </h3>
          <p className="relative z-10 mt-5 max-w-sm text-zinc-600">
            Przyjazd serwisanta nawet do 12 godzin. Większość usterek naprawiamy bez
            wymiany części — bez dodatkowych kosztów. Wszystkie marki: Bosch, Siemens,
            Electrolux, Beko, Samsung, LG i inne.
          </p>
          <Image
            src="/images/pralka.png"
            alt=""
            width={320}
            height={320}
            className="pointer-events-none absolute -bottom-8 -right-8 opacity-[0.07]"
          />
        </div>

        {/* Stat card */}
        <div className="rounded-2xl bg-zinc-900 p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Czas dojazdu
          </p>
          <p className="mt-4 text-5xl font-extrabold">do 12h</p>
          <div className="mt-4 h-1 w-2/3 rounded-full bg-white/20">
            <div className="h-1 w-4/5 rounded-full bg-white" />
          </div>
        </div>

        {/* Info card */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white">
            <ShieldIcon />
          </span>
          <h3 className="mt-5 text-lg font-bold text-zinc-900">Naprawa z gwarancją</h3>
          <p className="mt-1 text-sm text-zinc-600">
            Oryginalne części zamienne, dostępne od ręki dla najpopularniejszych usterek.
          </p>
        </div>

        {/* CTA card */}
        <a
          href="#zamow"
          className="group flex items-center justify-between gap-6 rounded-2xl bg-primary p-8 text-white transition hover:bg-primary/90 lg:col-span-2"
        >
          <div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
              Zamów wizytę online
            </h3>
            <p className="mt-2 text-white/80">
              Umów się z serwisantem w mniej niż 2 minuty.
            </p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-primary transition group-hover:scale-105">
            <ArrowIcon />
          </span>
        </a>
      </div>
    </section>
  );
}
