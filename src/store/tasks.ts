import { create } from 'zustand';
import { Task } from '@/types/task';
import { taskService } from '@/services/api/tasks';

interface TaskStore {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  fetchTasks: () => Promise<void>;
  addTask: (newTask: Omit<Task, 'id'>) => Promise<void>;
 // updateTask: (task: Task) => Promise<void>;
  //deleteTask: (taskId: number) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  isLoading: false,
  error: null,

  fetchTasks: async () => {
    try {
      set({ isLoading: true });
      const tasks = await taskService.getTasks();
      set({ tasks, error: null });
    } catch (error) {
      console.error('Erro ao carregar tarefas:', error);
      set({ error: 'Erro ao carregar tarefas' });
    } finally {
      set({ isLoading: false });
    }
  },

  addTask: async (newTask) => {
    try {
      const task = await taskService.createTask(newTask);
      set((state) => ({ tasks: [...state.tasks, task] }));
    } catch (error) {
      set({ error: 'Erro ao adicionar tarefa' });
      throw error;
    }
  },

  /**updateTask: async (task) => {
    try {
      await taskService.updateTask(task);
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === task.id ? task : t))
      }));
    } catch (error) {
      set({ error: 'Erro ao atualizar tarefa' });
      throw error;
    }
  },

  deleteTask: async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== taskId)
      }));
    } catch (error) {
      set({ error: 'Erro ao deletar tarefa' });
      throw error;
    }
  }, */
}));