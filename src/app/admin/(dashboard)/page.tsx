import Link from "next/link";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { pl } from "date-fns/locale";
import { getOrdersForMonth, getUnscheduledOrders } from "@/lib/orders-data";
import { updateOrderAction } from "@/lib/admin-order-actions";
import { OrderStatus } from "@/generated/prisma/enums";
import type { OrderModel } from "@/generated/prisma/models";

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

function OrderEditRow({ order }: { order: OrderModel }) {
  return (
    <form action={updateOrderAction} className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-4 sm:grid-cols-[1fr_auto_auto_auto]">
      <input type="hidden" name="id" value={order.id} />
      <div>
        <p className="font-semibold text-zinc-900">{order.name} · {order.phone}</p>
        <p className="text-sm text-zinc-600">{order.service} — {order.address}</p>
        {order.message && <p className="mt-1 text-sm text-zinc-500">{order.message}</p>}
        {order.preferredAt && (
          <p className="mt-1 text-xs text-zinc-400">Preferowany termin klienta: {order.preferredAt}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500">Termin wizyty</label>
        <input
          type="datetime-local"
          name="scheduledAt"
          defaultValue={toDatetimeLocal(order.scheduledAt)}
          className="rounded-lg border border-zinc-300 px-2 py-1.5 text-sm"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-500">Status</label>
        <select name="status" defaultValue={order.status} className="rounded-lg border border-zinc-300 bg-white px-2 py-1.5 text-sm">
          {Object.values(OrderStatus).map((s) => (
            <option key={s} value={s}>{STATUS_LABELS[s]}</option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button type="submit" className="rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-white hover:bg-primary/90">
          Zapisz
        </button>
      </div>
    </form>
  );
}

export default async function AdminCalendarPage({
  searchParams,
}: {
  searchParams: Promise<{ month?: string; date?: string }>;
}) {
  const params = await searchParams;
  const today = new Date();

  const [year, month] = params.month
    ? params.month.split("-").map(Number)
    : [today.getFullYear(), today.getMonth() + 1];

  const monthDate = new Date(year, month - 1, 1);
  const selectedDate = params.date ? new Date(`${params.date}T00:00:00`) : today;

  const [monthOrders, unscheduled] = await Promise.all([
    getOrdersForMonth(year, month),
    getUnscheduledOrders(),
  ]);

  const ordersByDay = new Map<string, OrderModel[]>();
  for (const order of monthOrders) {
    if (!order.scheduledAt) continue;
    const key = format(order.scheduledAt, "yyyy-MM-dd");
    ordersByDay.set(key, [...(ordersByDay.get(key) ?? []), order]);
  }

  const gridStart = startOfWeek(startOfMonth(monthDate), { weekStartsOn: 1 });
  const gridEnd = endOfWeek(endOfMonth(monthDate), { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  const prevMonth = format(subMonths(monthDate, 1), "yyyy-MM");
  const nextMonth = format(addMonths(monthDate, 1), "yyyy-MM");
  const selectedKey = format(selectedDate, "yyyy-MM-dd");
  const selectedDayOrders = ordersByDay.get(selectedKey) ?? [];

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-zinc-900 capitalize">
            {format(monthDate, "LLLL yyyy", { locale: pl })}
          </h1>
          <div className="flex gap-2 text-sm font-medium">
            <Link href={`/admin?month=${prevMonth}`} className="rounded-lg border border-zinc-300 px-3 py-1.5 hover:bg-zinc-100">←</Link>
            <Link href={`/admin?month=${format(today, "yyyy-MM")}`} className="rounded-lg border border-zinc-300 px-3 py-1.5 hover:bg-zinc-100">Dziś</Link>
            <Link href={`/admin?month=${nextMonth}`} className="rounded-lg border border-zinc-300 px-3 py-1.5 hover:bg-zinc-100">→</Link>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-zinc-500">
          {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((d) => (
            <div key={d} className="py-1">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => {
            const key = format(day, "yyyy-MM-dd");
            const count = ordersByDay.get(key)?.length ?? 0;
            const inMonth = isSameMonth(day, monthDate);
            const isSelected = isSameDay(day, selectedDate);
            const isToday = isSameDay(day, today);

            return (
              <Link
                key={key}
                href={`/admin?month=${format(monthDate, "yyyy-MM")}&date=${key}`}
                className={[
                  "flex h-20 flex-col items-start rounded-lg border p-2 text-sm transition",
                  inMonth ? "bg-white" : "bg-zinc-50 text-zinc-400",
                  isSelected ? "border-primary ring-2 ring-primary/30" : "border-zinc-200",
                  isToday ? "font-bold" : "",
                ].join(" ")}
              >
                <span>{format(day, "d")}</span>
                {count > 0 && (
                  <span className="mt-auto rounded-lg bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary/90">
                    {count} {count === 1 ? "zlecenie" : "zlecenia"}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <h2 className="mb-3 font-semibold text-zinc-900">
            Zlecenia — {format(selectedDate, "d MMMM yyyy", { locale: pl })}
          </h2>
          {selectedDayOrders.length === 0 ? (
            <p className="text-sm text-zinc-500">Brak zaplanowanych zleceń w tym dniu.</p>
          ) : (
            <div className="grid gap-3">
              {selectedDayOrders.map((o) => (
                <OrderEditRow key={o.id} order={o} />
              ))}
            </div>
          )}
        </div>
      </section>

      <aside>
        <h2 className="mb-3 font-semibold text-zinc-900">Nieprzypisane zgłoszenia ({unscheduled.length})</h2>
        <div className="grid gap-3">
          {unscheduled.length === 0 && (
            <p className="text-sm text-zinc-500">Wszystkie zgłoszenia mają przypisany termin.</p>
          )}
          {unscheduled.map((o) => (
            <OrderEditRow key={o.id} order={o} />
          ))}
        </div>
      </aside>
    </div>
  );
}
