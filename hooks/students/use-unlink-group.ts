/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageResponse } from '@/services/students/Interfaces';
import { StudentsService } from '@/services/students/students.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useUnlinkGroup() {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, number>({
    mutationFn: (studentId) => StudentsService.unlinkGroup(studentId),

    onSuccess: (_, studentId) => {
      toast.success('Estudante desvinculado do grupo');
      queryClient.invalidateQueries({
        queryKey: ['students', 'detail', studentId],
      });
      queryClient.invalidateQueries({
        queryKey: ['students', 'group', studentId],
      });
    },

    onError: (error: any) => {
      const msg =
        error?.response?.data?.message || 'Erro ao desvincular do grupo';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
