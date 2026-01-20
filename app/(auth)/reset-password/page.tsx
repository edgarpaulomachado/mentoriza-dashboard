import AuthHeader from "@/components/auth/header/auth-header";
import { ResetPasswordForm } from "@/components/auth/reset-password/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div>
      <div className="absolute">
        <AuthHeader />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-sm">
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  );
}
