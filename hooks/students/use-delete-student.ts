import { StudentsService } from '@/services/students/students.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => StudentsService.deactivateStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast.success('Estudante removido com sucesso');
    },
    onError: (err) => {
      toast.error('Erro ao remover estudante');
      console.error(err);
    },
  });
}
