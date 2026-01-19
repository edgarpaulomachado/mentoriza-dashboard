'use client';

import { LoginForm } from '@/components/auth/login/login-form';
import { CarouselAuthLogin } from './carousel';

export default function LoginPage() {
  return (
    <div className='w-full grid lg:grid-cols-2 h-dvh lg:overflow-hidden'>
      <CarouselAuthLogin />

      <div className='w-full items-center justify-center lg:justify-center lg:overflow-y-auto custom-scrollbar py-6 sm:py-14 flex-col  px-4 md:px-6 flex gap-6 sm:gap-11'>
        <div className='flex w-100 '>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
