import { Student } from '@/services/students/Interfaces';
import { StudentsService } from '@/services/students/students.service';
import { useQuery } from '@tanstack/react-query';

export function useStudent(id: number | null) {
  return useQuery<Student, Error>({
    queryKey: ['students', 'detail', id],
    queryFn: () => StudentsService.getStudent(id!),
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });
}
