import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "@/lib/admin-auth-actions";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-stone-100">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
            <span className="font-bold text-stone-900">NaprawyKraków CRM</span>
            <nav className="flex gap-4 text-sm font-medium text-stone-600">
              <Link href="/admin" className="hover:text-stone-900">Kalendarz</Link>
              <Link href="/admin/orders" className="hover:text-stone-900">Wszystkie zgłoszenia</Link>
            </nav>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="text-sm font-medium text-stone-500 hover:text-stone-900">
              Wyloguj
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
