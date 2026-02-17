/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageResponse } from '@/services/students/Interfaces';
import { StudentsService } from '@/services/students/students.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useDeactivateStudent() {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, number>({
    mutationFn: (id) => StudentsService.deactivateStudent(id),

    onSuccess: (_, studentId) => {
      toast.success('Estudante desativado com sucesso');
      queryClient.invalidateQueries({
        queryKey: ['students', 'detail', studentId],
      });
      queryClient.invalidateQueries({ queryKey: ['students', 'list'] });
    },

    onError: (error: any) => {
      const msg =
        error?.response?.data?.message ||
        'Não foi possível desativar o estudante';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
