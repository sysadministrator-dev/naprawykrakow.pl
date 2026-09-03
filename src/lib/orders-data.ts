import { prisma } from "@/lib/prisma";
import type { OrderStatus } from "@/generated/prisma/enums";

export function monthRange(year: number, month: number) {
  const start = new Date(Date.UTC(year, month - 1, 1));
  const end = new Date(Date.UTC(year, month, 1));
  return { start, end };
}

export async function getOrdersForMonth(year: number, month: number) {
  const { start, end } = monthRange(year, month);
  return prisma.order.findMany({
    where: { scheduledAt: { gte: start, lt: end } },
    orderBy: { scheduledAt: "asc" },
  });
}

export async function getUnscheduledOrders() {
  return prisma.order.findMany({
    where: { scheduledAt: null, status: { notIn: ["DONE", "CANCELLED"] } },
    orderBy: { createdAt: "desc" },
  });
}

export async function getAllOrders(status?: OrderStatus) {
  return prisma.order.findMany({
    where: status ? { status } : undefined,
    orderBy: { createdAt: "desc" },
  });
}

export async function getOrder(id: string) {
  return prisma.order.findUnique({ where: { id } });
}
