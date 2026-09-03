import { reviews } from "@/lib/reviews";

export default function Reviews() {
  return (
    <section id="opinie" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-zinc-900">Opinie klientów</h2>
        <p className="mt-2 text-zinc-600">Opublikowano na Google</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-primary" aria-hidden="true">
                {"★★★★★"}
              </div>
              <blockquote className="mt-3 text-sm text-zinc-700">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-zinc-900">
                {r.author}
                <span className="block text-xs font-normal text-zinc-500">{r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
