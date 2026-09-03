import { krakowDistricts, nearbyTowns } from "@/lib/areas";

export default function ServiceArea() {
  return (
    <section id="zasieg" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-stone-900">Dojeżdżamy do klientów na terenie Krakowa i okolic</h2>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500">Dzielnice Krakowa</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {krakowDistricts.map((d) => (
            <span key={d} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-500">Okoliczne miejscowości</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {nearbyTowns.map((t) => (
            <span key={t} className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
