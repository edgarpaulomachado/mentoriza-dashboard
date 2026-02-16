import { AuthService } from '@/services/auth/index.service';
import { ResetPasswordPayload } from '@/services/auth/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export function useResetPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: ResetPasswordPayload) => AuthService.ResetPassword(data),
    onSuccess: () => {
      toast.success('Success');
      router.replace('/login');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error.response.data.message);
      const message = error.response.data.message;
      toast.error(message);
    },
  });
}
