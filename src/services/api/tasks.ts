import { Task } from '@/types/task';
import { http } from '../http';

export const taskService = {
  async getTasks(): Promise<Task[]> {
    return http.get<Task[]>('/api/tasks');
  },

  async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    return http.post<Task>('/api/tasks', task);
  },

  async updateTask(task: Task): Promise<Task> {
    return http.put<Task>(`/api/tasks/${task.id}`, task);
  },

  async deleteTask(taskId: number): Promise<void> {
    return http.delete(`/api/tasks/${taskId}`);
  }

};