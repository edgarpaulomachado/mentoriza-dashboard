/* eslint-disable @typescript-eslint/no-explicit-any */

import { MessageResponse } from '@/services/students/Interfaces';
import { StudentsService } from '@/services/students/students.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useUnlinkUser() {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, number>({
    mutationFn: (studentId) => StudentsService.unlinkUser(studentId),

    onSuccess: (_, studentId) => {
      toast.success('Usuário desvinculado do estudante');
      queryClient.invalidateQueries({
        queryKey: ['students', 'detail', studentId],
      });
    },

    onError: (error: any) => {
      const msg =
        error?.response?.data?.message || 'Erro ao desvincular usuário';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
