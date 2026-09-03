import { reviews } from "@/lib/reviews";

export default function Reviews() {
  return (
    <section id="opinie" className="bg-stone-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-stone-900">Opinie klientów</h2>
        <p className="mt-2 text-stone-600">Opublikowano na Google</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <div className="text-accent" aria-hidden="true">
                {"★★★★★"}
              </div>
              <blockquote className="mt-3 text-sm text-stone-700">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-stone-900">
                {r.author}
                <span className="block text-xs font-normal text-stone-500">{r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
