export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: string;
};

export const services: Service[] = [
  { slug: "pralka", name: "Naprawa pralki", short: "Wszystkie marki, dojazd do 12h", icon: "/images/pralka.png" },
  { slug: "zmywarka", name: "Naprawa zmywarki", short: "Diagnoza i naprawa na miejscu", icon: "/images/zmywarka.png" },
  { slug: "suszarka", name: "Naprawa suszarki", short: "Szybka naprawa z gwarancją", icon: "/images/suszarka.png" },
  { slug: "okap", name: "Naprawa okapu", short: "Serwis i montaż okapów kuchennych", icon: "/images/okap.png" },
  { slug: "elektryk", name: "Elektryk", short: "Gniazda, włączniki, oświetlenie", icon: "/images/elektryk.png" },
  { slug: "hydraulik", name: "Hydraulik", short: "Naprawa, montaż, serwis Geberit", icon: "/images/hydraulik.png" },
  { slug: "zlota-raczka", name: "Złota rączka / montaż mebli", short: "Montaż mebli, TV, półek, drobne naprawy", icon: "🛠️" },
  { slug: "inne", name: "Inna usterka", short: "Opisz problem — dobierzemy fachowca", icon: "🔧" },
];
