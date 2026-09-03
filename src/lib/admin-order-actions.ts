"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { OrderStatus } from "@/generated/prisma/enums";

const STATUS_VALUES = Object.values(OrderStatus) as string[];

export async function updateOrderAction(formData: FormData) {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  const scheduledAtRaw = String(formData.get("scheduledAt") ?? "");

  if (!id || !STATUS_VALUES.includes(status)) {
    throw new Error("Nieprawidłowe dane zgłoszenia.");
  }

  const scheduledAt = scheduledAtRaw ? new Date(scheduledAtRaw) : null;

  await prisma.order.update({
    where: { id },
    data: {
      status: status as OrderStatus,
      scheduledAt: scheduledAt && !isNaN(scheduledAt.getTime()) ? scheduledAt : null,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/orders");
}
