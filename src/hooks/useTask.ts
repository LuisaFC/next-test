import { useState, useEffect } from 'react';
import { Task } from '@/types/task';
import { taskService } from '@/services/api/tasks';
import { HttpError } from '@/services/http';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTasks() {
      try {
        setIsLoading(true);
        const data = await taskService.getTasks();
        setTasks(data);
      } catch (err) {
        const message = err instanceof HttpError
          ? 'Erro ao carregar tarefas'
          : 'Erro inesperado';
        setError(message);
        console.error('Erro:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return { tasks, isLoading, error };
}