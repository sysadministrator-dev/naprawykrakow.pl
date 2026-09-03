import { krakowDistricts, nearbyTowns } from "@/lib/areas";

export default function ServiceArea() {
  return (
    <section id="zasieg" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-zinc-900">Dojeżdżamy do klientów na terenie Krakowa i okolic</h2>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Dzielnice Krakowa</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {krakowDistricts.map((d) => (
            <span key={d} className="rounded-lg bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Okoliczne miejscowości</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {nearbyTowns.map((t) => (
            <span key={t} className="rounded-lg bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
