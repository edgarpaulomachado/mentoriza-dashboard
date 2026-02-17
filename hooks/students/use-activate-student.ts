import { MessageResponse } from '@/services/students/Interfaces';
import { StudentsService } from '@/services/students/students.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export function useActivateStudent() {
  const queryClient = useQueryClient();

  return useMutation<MessageResponse, Error, number>({
    mutationFn: (id) => StudentsService.activateStudent(id),

    onSuccess: (_, studentId) => {
      toast.success('Estudante ativado com sucesso');
      queryClient.invalidateQueries({
        queryKey: ['students', 'detail', studentId],
      });
      queryClient.invalidateQueries({ queryKey: ['students', 'list'] });
    },

    // onError: (error: AxiosError<IErrorResponse>) => {
    //   const msg =
    //     error?.response?.data?.message || 'Não foi possível ativar o estudante';
    //   toast.error(Array.isArray(msg) ? msg[0] : msg);
    // },
  });
}
