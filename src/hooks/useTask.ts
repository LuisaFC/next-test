import { useState, useEffect, useCallback } from 'react';
import { Task } from '@/types/task';
import { taskService } from '@/services/api/tasks';
import { HttpError } from '@/services/http';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await taskService.getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
        const message = err instanceof HttpError
          ? 'Erro ao carregar tarefas'
          : 'Erro inesperado';
          setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const addTask = useCallback(async (newTask: Omit<Task, 'id'>) => {
    try {
      const createdTask = await taskService.createTask(newTask);
      setTasks(prevTasks => [...prevTasks, createdTask]);
      return createdTask;
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    isLoading,
    error,
    refetch: fetchTasks,
    addTask
  };
}