"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";

const orderSchema = z.object({
  name: z.string().trim().min(2, "Podaj imię").max(100),
  phone: z.string().trim().min(6, "Podaj numer telefonu").max(30),
  email: z.union([z.literal(""), z.string().trim().email("Nieprawidłowy e-mail")]).optional(),
  service: z.string().trim().min(1, "Wybierz usługę"),
  address: z.string().trim().min(3, "Podaj adres lub dzielnicę").max(200),
  message: z.string().trim().max(1000).optional(),
  preferredAt: z.string().trim().max(200).optional(),
});

export type OrderFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function createOrder(
  _prevState: OrderFormState,
  formData: FormData,
): Promise<OrderFormState> {
  // Honeypot: bots fill every field, real users never see or fill this one.
  if (formData.get("company")) {
    return { status: "success", message: "Dziękujemy! Zgłoszenie zostało wysłane." };
  }

  const parsed = orderSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    address: formData.get("address"),
    message: formData.get("message"),
    preferredAt: formData.get("preferredAt"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { status: "error", message: "Popraw zaznaczone pola.", fieldErrors };
  }

  const data = parsed.data;

  await prisma.order.create({
    data: {
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      service: data.service,
      address: data.address,
      message: data.message || null,
      preferredAt: data.preferredAt || null,
    },
  });

  return {
    status: "success",
    message: "Dziękujemy! Zgłoszenie zostało wysłane, skontaktujemy się wkrótce.",
  };
}
