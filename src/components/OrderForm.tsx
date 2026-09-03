"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { createOrder, type OrderFormState } from "@/lib/order-actions";
import { services } from "@/lib/services";

const initialState: OrderFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-accent px-6 py-3 text-base font-semibold text-white transition hover:bg-accent-dark disabled:opacity-60"
    >
      {pending ? "Wysyłanie..." : "Wyślij zgłoszenie"}
    </button>
  );
}

export default function OrderForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction] = useActionState(createOrder, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
        <p className="font-semibold">Dziękujemy!</p>
        <p className="mt-1 text-sm">{state.message}</p>
      </div>
    );
  }

  const err = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="grid gap-4">
      {/* Honeypot — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Imię *</label>
          <input
            name="name"
            required
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
          />
          {err.name && <p className="mt-1 text-xs text-red-600">{err.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Telefon *</label>
          <input
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
          />
          {err.phone && <p className="mt-1 text-xs text-red-600">{err.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">E-mail</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
          />
          {err.email && <p className="mt-1 text-xs text-red-600">{err.email}</p>}
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-stone-700">Usługa *</label>
          <select
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className="w-full rounded-lg border border-stone-300 bg-white px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
          >
            <option value="" disabled>
              Wybierz usługę
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {err.service && <p className="mt-1 text-xs text-red-600">{err.service}</p>}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">Adres / dzielnica *</label>
        <input
          name="address"
          required
          placeholder="np. Podgórze, ul. Przykładowa 1"
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
        />
        {err.address && <p className="mt-1 text-xs text-red-600">{err.address}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">Preferowany termin</label>
        <input
          name="preferredAt"
          placeholder="np. jutro po 16:00"
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-stone-700">Opis usterki</label>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 text-stone-900 focus:border-accent focus:outline-none"
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <SubmitButton />

      <p className="text-xs text-stone-500">
        Wysyłając formularz akceptujesz przetwarzanie danych w celu realizacji zgłoszenia —
        szczegóły w{" "}
        <a href="/polityka-prywatnosci" className="underline">
          polityce prywatności
        </a>
        .
      </p>
    </form>
  );
}
