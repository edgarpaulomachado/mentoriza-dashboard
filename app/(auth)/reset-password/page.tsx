"use client";

import { Suspense } from "react";
import AuthHeader from "@/components/auth/header/auth-header";
import ResetPasswordClient from "./reset-password-client";

export default function ResetPasswordPage() {
  return (
    <div>
      <div className="absolute">
        <AuthHeader />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-sm">
          <Suspense fallback={<p>A carregar...</p>}>
            <ResetPasswordClient />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
