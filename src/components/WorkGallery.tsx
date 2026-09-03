import Image from "next/image";

const items = [
  {
    title: "Elektryk",
    text: "Montaż i wymiana gniazd, włączników, kinkietów, żyrandoli i lamp.",
    image: "/images/work-elektryk.png",
  },
  {
    title: "Hydraulik",
    text: "Naprawa, wymiana i montaż hydrauliki, w tym serwis systemów podtynkowych Geberit.",
    image: "/images/work-hydraulik.png",
  },
  {
    title: "Złota rączka. Montaż mebli",
    text: "Montaż telewizorów, półek, luster, składanie i montaż mebli Ikea, Jysk, BRW i innych.",
    image: "/images/work-meble.png",
  },
];

export default function WorkGallery() {
  return (
    <section id="realizacje" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900">Realizacje</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="relative h-48 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
