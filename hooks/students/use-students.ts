import { Student } from '@/services/students/Interfaces';
import { StudentsService } from '@/services/students/students.service';
import { useQuery } from '@tanstack/react-query';

export function useStudents() {
  return useQuery<Student[], Error>({
    queryKey: ['students', 'list'],
    queryFn: StudentsService.getAllStudents,
    staleTime: 1000 * 60 * 4,
  });
}
