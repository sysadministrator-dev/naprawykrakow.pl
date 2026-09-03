"use server";

import { redirect } from "next/navigation";
import { checkAdminCredentials, createAdminSession, destroyAdminSession } from "@/lib/auth";

export type LoginFormState = {
  status: "idle" | "error";
  message?: string;
};

export async function loginAction(
  _prevState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!checkAdminCredentials(username, password)) {
    return { status: "error", message: "Nieprawidłowy login lub hasło." };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/admin/login");
}
