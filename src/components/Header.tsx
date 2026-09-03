"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_DISPLAY } from "@/lib/contact";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-zinc-200 bg-white/70 backdrop-blur-md transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100 shadow-sm" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          Naprawy<span className="text-primary">Kraków</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          <a href="#uslugi" className="hover:text-zinc-900">Usługi</a>
          <a href="#realizacje" className="hover:text-zinc-900">Realizacje</a>
          <a href="#opinie" className="hover:text-zinc-900">Opinie</a>
          <a href="#zasieg" className="hover:text-zinc-900">Zasięg działania</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="hidden text-sm font-semibold text-zinc-900 sm:block"
          >
            📞 {PHONE_DISPLAY}
          </a>
          <a
            href="#zamow"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            Umów wizytę
          </a>
        </div>
      </div>
    </header>
  );
}
