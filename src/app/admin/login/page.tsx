"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction, type LoginFormState } from "@/lib/admin-auth-actions";

const initialState: LoginFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
    >
      {pending ? "Logowanie..." : "Zaloguj się"}
    </button>
  );
}

export default function AdminLoginPage() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
      <form action={formAction} className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-zinc-900">Panel administratora</h1>
        <p className="mt-1 text-sm text-zinc-500">NaprawyKraków CRM</p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">Login</label>
            <input
              name="username"
              required
              autoFocus
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 focus:border-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-zinc-700">Hasło</label>
            <input
              name="password"
              type="password"
              required
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        {state.status === "error" && (
          <p className="mt-4 text-sm text-red-600">{state.message}</p>
        )}

        <div className="mt-6">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
