import Image from "next/image";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="grid min-h-screen md:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        <p className="mb-4 inline-block w-fit rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary/90">
          Dojazd nawet do 12 godzin
        </p>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
          Naprawa AGD, elektryk i hydraulik w Krakowie
        </h1>

        <div className="my-6 h-1 w-16 bg-primary" />

        <p className="max-w-xl text-lg text-zinc-600">
          Pralki, zmywarki, suszarki, okapy — naprawa z gwarancją, bez zbędnych
          wymian części. Wszystkie marki: Bosch, Samsung, LG, Beko, Electrolux i inne.
        </p>

        <a
          href="#zamow"
          className="mt-8 w-fit border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-widest text-zinc-900 transition hover:text-primary"
        >
          Zamów wizytę online →
        </a>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-zinc-200 pt-8 text-sm text-zinc-600">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-primary">
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <span className="flex items-center gap-2">
            <ClockIcon />
            Dojazd do 12h
          </span>
          <span className="flex items-center gap-2">
            <ShieldIcon />
            Naprawa z gwarancją
          </span>
          <span className="flex items-center gap-2">
            <PinIcon />
            Kraków i okolice
          </span>
        </div>
      </div>

      <div className="relative hidden min-h-[50vh] md:block">
        <div className="absolute inset-0 [clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <Image
            src="/images/work-elektryk.png"
            alt="Nasz fachowiec przy pracy"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
