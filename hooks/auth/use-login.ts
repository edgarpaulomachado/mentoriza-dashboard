/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginFormData } from '@/schemas/auth/login-schema';
import { AuthService } from '@/services/auth/index.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginFormData) => AuthService.login(data),
    onSuccess: () => {
      toast.success('Login successfully');
      router.replace('/dashboard');
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      const message = error.response.data.message;
      toast.error(message);
    },
  });
}
