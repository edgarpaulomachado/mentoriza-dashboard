/* eslint-disable @typescript-eslint/no-explicit-any */
import { ForgotPasswordFormData } from '@/schemas/auth/forgot-password-schema';
import { AuthService } from '@/services/auth/index.service';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: ForgotPasswordFormData) => {
      return AuthService.ForgotPassword(data);
    },
    onSuccess: () => {
      toast.success('We sent a email for you, check your inbox');
    },
    onError: (error: any) => {
      console.log(error.response.data.message);
      const message = error.response.data.message;
      toast.error(message);
    },
  });
}
