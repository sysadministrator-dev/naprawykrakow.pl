import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naprawy Kraków — serwis AGD, elektryk, hydraulik | +48 793 114 915",
  description:
    "Naprawa pralek, zmywarek, suszarek i okapów w Krakowie. Elektryk, hydraulik, montaż mebli. Dojazd nawet do 12h, naprawa z gwarancją. Zadzwoń: +48 793 114 915.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
