import { reviews } from "@/lib/reviews";
import ReviewCard from "@/components/ReviewCard";

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
