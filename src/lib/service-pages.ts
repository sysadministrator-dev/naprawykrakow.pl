export type ServicePage = {
  slug: string;
  serviceValue: string; // matches services.ts slug, preselects the order form
  name: string;
  h1: string;
  metaDescription: string;
  image: string;
  intro: string;
  symptoms: string[];
  brands: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "naprawa-pralki-krakow",
    serviceValue: "pralka",
    name: "Naprawa pralki",
    h1: "Naprawa pralki Kraków",
    metaDescription:
      "Naprawa pralek w Krakowie z dojazdem nawet do 12h. Wszystkie marki, oryginalne części, naprawa z gwarancją. Zadzwoń: +48 793 114 915.",
    image: "/images/pralka.png",
    intro:
      "Pralka nie wiruje, nie odpompowuje wody, głośno pracuje albo zatrzymuje się w trakcie prania? Diagnozujemy usterkę na miejscu i najczęściej naprawiamy bez wymiany części, czyli bez dodatkowych kosztów dla Ciebie.",
    symptoms: [
      "Pralka nie włącza się lub wyświetla błąd",
      "Nie wiruje lub nie odpompowuje wody",
      "Głośno pracuje, wibruje, przecieka",
      "Nie grzeje wody / pranie zostaje zimne",
      "Zatrzymuje się w trakcie cyklu",
    ],
    brands: ["Bosch", "Siemens", "Electrolux", "AEG", "Beko", "Whirlpool", "Samsung", "LG", "Candy", "Amica"],
  },
  {
    slug: "naprawa-zmywarek-krakow",
    serviceValue: "zmywarka",
    name: "Naprawa zmywarki",
    h1: "Naprawa zmywarki Kraków",
    metaDescription:
      "Naprawa zmywarek w Krakowie — nie myje, nie grzeje, przecieka? Szybka diagnoza i naprawa z gwarancją. Zadzwoń: +48 793 114 915.",
    image: "/images/zmywarka.png",
    intro:
      "Zmywarka nie uruchamia się, źle myje naczynia albo zostawia je mokre lub tłuste po cyklu? Naprawiamy wszystkie popularne marki, mamy dostęp do oryginalnych części zamiennych.",
    symptoms: [
      "Nie uruchamia się lub wyświetla kod błędu",
      "Naczynia zostają brudne lub tłuste po myciu",
      "Nie pobiera lub nie odprowadza wody",
      "Przecieka spod obudowy",
      "Głośno pracuje",
    ],
    brands: ["Bosch", "Siemens", "Electrolux", "Beko", "Whirlpool", "Miele", "Samsung", "Gorenje"],
  },
  {
    slug: "naprawa-suszarek-krakow",
    serviceValue: "suszarka",
    name: "Naprawa suszarki",
    h1: "Naprawa suszarki Kraków",
    metaDescription:
      "Naprawa suszarek do ubrań w Krakowie — nie grzeje, nie kręci bębna, filtr się zapycha? Naprawa z gwarancją, dojazd do 12h.",
    image: "/images/suszarka.png",
    intro:
      "Suszarka za długo suszy, nie grzeje albo zatrzymuje się w trakcie programu? Sprawdzimy pompkę ciepła, grzałkę i elektronikę na miejscu, u Ciebie w domu.",
    symptoms: [
      "Nie grzeje, ubrania zostają wilgotne",
      "Bęben się nie kręci",
      "Zatrzymuje się w trakcie programu",
      "Głośno pracuje lub wydaje nietypowe dźwięki",
      "Wyświetla kod błędu",
    ],
    brands: ["Bosch", "Electrolux", "AEG", "Whirlpool", "Beko", "Samsung", "LG", "Candy"],
  },
  {
    slug: "naprawa-okapow-krakow",
    serviceValue: "okap",
    name: "Naprawa okapu",
    h1: "Naprawa okapu kuchennego Kraków",
    metaDescription:
      "Serwis i naprawa okapów kuchennych w Krakowie — silnik, oświetlenie, filtry, montaż. Zadzwoń: +48 793 114 915.",
    image: "/images/okap.png",
    intro:
      "Okap słabo wyciąga powietrze, hałasuje albo nie działa oświetlenie? Naprawiamy i serwisujemy okapy kuchenne wszystkich producentów, wykonujemy też montaż nowych urządzeń.",
    symptoms: [
      "Słaba siła wyciągu / nie usuwa zapachów",
      "Głośna praca silnika",
      "Nie działa oświetlenie lub panel sterowania",
      "Potrzebny montaż nowego okapu",
    ],
    brands: ["Bosch", "Electrolux", "AEG", "Amica", "Gorenje", "Samsung"],
  },
  {
    slug: "elektryk-krakow",
    serviceValue: "elektryk",
    name: "Elektryk",
    h1: "Elektryk Kraków — usługi elektryczne",
    metaDescription:
      "Elektryk Kraków: montaż i wymiana gniazd, włączników, lamp, żyrandoli. Szybki dojazd, uczciwa wycena. Zadzwoń: +48 793 114 915.",
    image: "/images/elektryk.png",
    intro:
      "Montaż i wymiana gniazdek, włączników, kinkietów, żyrandoli i opraw oświetleniowych. Diagnozujemy też usterki instalacji elektrycznej w mieszkaniach i domach.",
    symptoms: [
      "Wymiana lub montaż gniazdek i włączników",
      "Montaż lamp, żyrandoli, kinkietów",
      "Wyłącza się bezpiecznik / brak prądu w części instalacji",
      "Iskrzenie, przegrzewanie się gniazd",
    ],
    brands: [],
  },
  {
    slug: "hydraulik-krakow",
    serviceValue: "hydraulik",
    name: "Hydraulik",
    h1: "Hydraulik Kraków — usługi hydrauliczne",
    metaDescription:
      "Hydraulik Kraków: naprawa i montaż instalacji, serwis Geberit, wymiana zaworów i baterii. Zadzwoń: +48 793 114 915.",
    image: "/images/hydraulik.png",
    intro:
      "Profesjonalna i szybka naprawa, wymiana i montaż hydrauliki, w tym serwis systemów podtynkowych Geberit, Grohe, Kolo, Cersanit i Alca Plast — zaworów spustowych, napełniających, przycisków i mocowań.",
    symptoms: [
      "Cieknący kran, spłuczka lub syfon",
      "Awaria stelaża podtynkowego (Geberit i inne)",
      "Wymiana baterii, zaworów, wężyków",
      "Montaż nowej armatury łazienkowej lub kuchennej",
    ],
    brands: ["Grohe", "Kolo", "Geberit", "Cersanit", "Alca Plast"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
