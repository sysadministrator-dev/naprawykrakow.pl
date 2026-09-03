import Link from "next/link";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { getAllOrders } from "@/lib/orders-data";
import { updateOrderAction } from "@/lib/admin-order-actions";
import { OrderStatus } from "@/generated/prisma/enums";

const STATUS_LABELS: Record<string, string> = {
  NEW: "Nowe",
  CONFIRMED: "Potwierdzone",
  IN_PROGRESS: "W trakcie",
  DONE: "Zrealizowane",
  CANCELLED: "Anulowane",
};

function toDatetimeLocal(date: Date | null) {
  if (!date) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const status = params.status && params.status in OrderStatus ? (params.status as OrderStatus) : undefined;
  const orders = await getAllOrders(status);

  return (
    <div>
      <h1 className="text-xl font-bold text-zinc-900">Wszystkie zgłoszenia ({orders.length})</h1>

      <div className="mt-4 flex flex-wrap gap-2 text-sm">
        <Link href="/admin/orders" className={`rounded-lg px-3 py-1 ${!status ? "bg-zinc-900 text-white" : "bg-zinc-200 text-zinc-700"}`}>
          Wszystkie
        </Link>
        {Object.values(OrderStatus).map((s) => (
          <Link
            key={s}
            href={`/admin/orders?status=${s}`}
            className={`rounded-lg px-3 py-1 ${status === s ? "bg-zinc-900 text-white" : "bg-zinc-200 text-zinc-700"}`}
          >
            {STATUS_LABELS[s]}
          </Link>
        ))}
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-300 text-left text-zinc-500">
              <th className="py-2 pr-4">Zgłoszono</th>
              <th className="py-2 pr-4">Klient</th>
              <th className="py-2 pr-4">Usługa / adres</th>
              <th className="py-2 pr-4">Termin</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-zinc-200 align-top">
                <td className="py-3 pr-4 whitespace-nowrap text-zinc-500">
                  {format(o.createdAt, "d MMM yyyy, HH:mm", { locale: pl })}
                </td>
                <td className="py-3 pr-4">
                  <p className="font-medium text-zinc-900">{o.name}</p>
                  <p className="text-zinc-500">{o.phone}</p>
                </td>
                <td className="py-3 pr-4">
                  <p className="text-zinc-900">{o.service}</p>
                  <p className="text-zinc-500">{o.address}</p>
                </td>
                <td className="py-3 pr-4 whitespace-nowrap">
                  {o.scheduledAt ? format(o.scheduledAt, "d MMM, HH:mm", { locale: pl }) : "—"}
                </td>
                <td className="py-3 pr-4">
                  <form action={updateOrderAction} className="flex flex-col gap-2">
                    <input type="hidden" name="id" value={o.id} />
                    <input
                      type="datetime-local"
                      name="scheduledAt"
                      defaultValue={toDatetimeLocal(o.scheduledAt)}
                      className="rounded border border-zinc-300 px-2 py-1 text-xs"
                    />
                    <select name="status" defaultValue={o.status} className="rounded border border-zinc-300 bg-white px-2 py-1 text-xs">
                      {Object.values(OrderStatus).map((s) => (
                        <option key={s} value={s}>{STATUS_LABELS[s]}</option>
                      ))}
                    </select>
                    <button type="submit" className="rounded bg-primary px-2 py-1 text-xs font-semibold text-white hover:bg-primary/90">
                      Zapisz
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
