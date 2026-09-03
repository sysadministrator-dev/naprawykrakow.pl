import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import { servicePages } from "@/lib/service-pages";

export default function Services() {
  return (
    <section id="uslugi" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-stone-900">Popularne usługi</h2>
      <p className="mt-2 max-w-2xl text-stone-600">
        Naprawa AGD, elektryka i hydraulika w Krakowie i okolicach. Wybierz usługę, aby
        dowiedzieć się więcej, lub od razu zamów wizytę.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {services.map((s) => {
          const page = servicePages.find((p) => p.serviceValue === s.slug);
          const href = page ? `/${page.slug}` : "#zamow";
          const isImage = s.icon.startsWith("/");

          return (
            <Link
              key={s.slug}
              href={href}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-stone-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
            >
              <div className="flex h-16 w-16 items-center justify-center">
                {isImage ? (
                  <Image src={s.icon} alt={s.name} width={64} height={64} className="object-contain" />
                ) : (
                  <span className="text-4xl">{s.icon}</span>
                )}
              </div>
              <div>
                <p className="font-semibold text-stone-900 group-hover:text-accent-dark">{s.name}</p>
                <p className="mt-1 text-xs text-stone-500">{s.short}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
