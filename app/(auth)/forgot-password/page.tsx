import { ForgotPasswordForm } from '@/components/auth/forgot-password/forgot-password-form';
import AuthHeader from '@/components/auth/header/auth-header';

export default function ForgotPasswordPage() {
  return (
    <div>
      <div className='absolute'>
        <AuthHeader />
      </div>
      <div className='flex min-h-screen items-center justify-center'>
        <div className='w-full max-w-sm'>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
