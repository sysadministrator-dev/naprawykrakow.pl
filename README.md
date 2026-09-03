# NaprawyKraków

Strona firmy remontowo-serwisowej (naprawa AGD, elektryk, hydraulik) w Krakowie
z wbudowanym mini-CRM: klienci zostawiają zgłoszenie przez formularz na stronie,
a administrator zarządza nimi w widoku kalendarza w panelu `/admin`.

Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS + Prisma 7 + Neon Postgres.

## Struktura

- `/` — strona główna
- `/uslugi` — lista usług
- `/naprawa-pralki-krakow`, `/naprawa-zmywarek-krakow`, `/naprawa-suszarek-krakow`,
  `/naprawa-okapow-krakow`, `/elektryk-krakow`, `/hydraulik-krakow` — strony usług
  (adresy zgodne ze starą stroną, dla zachowania pozycji SEO)
- `/polityka-prywatnosci` — polityka prywatności (RODO)
- `/admin` — panel CRM: kalendarz + zarządzanie zgłoszeniami (wymaga logowania)
- `/admin/orders` — lista wszystkich zgłoszeń z filtrem po statusie
- `/admin/login` — logowanie administratora

## Rozwój lokalny

```bash
npm install
cp .env.example .env   # uzupełnij DATABASE_URL i dane logowania admina
npx prisma migrate dev # utworzy tabele w bazie
npm run dev
```

## Zmienne środowiskowe

Patrz `.env.example`:

- `DATABASE_URL` — connection string do Postgresa (Neon: pooled connection string)
- `ADMIN_USERNAME` / `ADMIN_PASSWORD` — dane logowania do panelu `/admin`
- `ADMIN_SESSION_SECRET` — losowy sekret do podpisywania ciasteczka sesji
  (wygeneruj przez `openssl rand -hex 32`)

## Wdrożenie na Vercel

1. Zaimportuj repozytorium na [vercel.com/new](https://vercel.com/new).
2. W ustawieniach projektu dodaj zmienne środowiskowe z `.env.example`
   (produkcyjny `DATABASE_URL` z Neona, oraz `ADMIN_USERNAME` / `ADMIN_PASSWORD` /
   `ADMIN_SESSION_SECRET` z bezpiecznymi wartościami).
3. Po pierwszym deployu uruchom migracje na produkcyjnej bazie:
   `DATABASE_URL=... npx prisma migrate deploy` (lokalnie lub z Vercel CLI).

## Baza danych

Model danych znajduje się w `prisma/schema.prisma` — jeden model `Order`
(zgłoszenie klienta) ze statusem (`NEW`, `CONFIRMED`, `IN_PROGRESS`, `DONE`,
`CANCELLED`) i opcjonalnym terminem wizyty (`scheduledAt`), który administrator
przypisuje w kalendarzu.
