import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Usługi | NaprawyKraków",
  description:
    "Naprawa pralek, zmywarek, suszarek, okapów, usługi elektryka i hydraulika w Krakowie. Zobacz pełną listę usług.",
};

export default function UslugiPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 pt-14">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Nasze usługi</h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Naprawa AGD, elektryk i hydraulik w Krakowie i okolicach. Wybierz usługę, aby zobaczyć
            szczegóły i zamówić wizytę.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
