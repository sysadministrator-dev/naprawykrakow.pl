import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkGallery from "@/components/WorkGallery";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import OrderForm from "@/components/OrderForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WorkGallery />
        <Reviews />
        <ServiceArea />

        <section id="zamow" className="bg-zinc-50 py-16">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold text-zinc-900">Zamów usługę na dzisiaj</h2>
            <p className="mt-2 text-zinc-600">
              Zarezerwuj termin szybko przez telefon lub online — oddzwonimy i potwierdzimy wizytę.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <OrderForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyContact />
    </>
  );
}
