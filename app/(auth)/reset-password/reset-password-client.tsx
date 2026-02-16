"use client";

import { ResetPasswordForm } from "@/components/auth/reset-password/reset-password-form";
import { useSearchParams } from "next/navigation";

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div>
      {!token ? <p>Token inválido ou inexistente</p> : <ResetPasswordForm />}
    </div>
  );
}
