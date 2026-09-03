import { reviews } from "@/lib/reviews";

function QuoteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 text-primary/30">
      <path d="M9.5 7C6.5 8.6 5 10.9 5 14c0 2.2 1.3 3.5 3.2 3.5 1.7 0 3-1.2 3-2.9 0-1.6-1.2-2.7-2.7-2.7-.2 0-.4 0-.6.1.3-1.7 1.6-3.2 3.3-4.1L9.5 7Zm9 0C15.5 8.6 14 10.9 14 14c0 2.2 1.3 3.5 3.2 3.5 1.7 0 3-1.2 3-2.9 0-1.6-1.2-2.7-2.7-2.7-.2 0-.4 0-.6.1.3-1.7 1.6-3.2 3.3-4.1L18.5 7Z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <figure className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm">
      <QuoteIcon />
      <blockquote className="mt-4 line-clamp-4 flex-1 text-zinc-700">{review.text}</blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
          {initial}
        </span>
        <span>
          <span className="block text-sm font-semibold text-zinc-900">{review.author}</span>
          <span className="block text-xs text-zinc-500">Opinia z Google · {review.date}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section id="opinie" className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Opinie</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Zaufali nam mieszkańcy Krakowa
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Nie musisz wierzyć nam na słowo — zobacz, co mówią nasi klienci w Google.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
