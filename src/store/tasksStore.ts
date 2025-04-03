import { create } from 'zustand';
import { Task, TaskPriorityType, TaskStatusType } from '@/types/task';
import { taskService } from '@/services/api/tasks';

interface TaskStore {
  tasks: Task[];
  isLoading: boolean;
  error: string | null;
  filters: {
    status: TaskStatusType | 'all';
    priority: TaskPriorityType | 'all';
    favorite: boolean;
  };
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setStatusFilter: (status: TaskStatusType | 'all') => void;
  setPriorityFilter: (priority: TaskPriorityType | 'all') => void;
  setFavoriteFilter: (favorite: boolean) => void;
  resetFilters: () => void;
  fetchTasks: () => Promise<void>;
  addTask: (newTask: Omit<Task, 'id'>) => Promise<void>;
  updateTask: (task: Task) => Promise<void>;
  deleteTask: (taskId: number) => Promise<void>;
  cloneTask: (task: Task) => Promise<void>;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  isLoading: false,
  error: null,
  filters: {
    status: 'all',
    priority: 'all',
    favorite: false,
  },
  searchQuery: '',
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

  cloneTask: async (task: Task) => {
    try {
      const newTitle = task.title.endsWith("(Cópia)")
        ? task.title
        : `${task.title} (Cópia)`;

      const clonedTask = {
        title: newTitle,
        description: task.description,
        status: task.status,
        priority: task.priority,
        favorite: false,
      };

      const newTask = await taskService.createTask(clonedTask);
      set((state) => ({
        tasks: [...state.tasks, newTask]
      }));
    } catch (error) {
      console.error('Erro ao clonar tarefa:', error);
      set({ error: 'Erro ao clonar tarefa' });
      throw error;
    }
  },

  updateTask: async (task) => {
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
  },

  setStatusFilter: (status) =>
    set((state) => ({
      ...state,
      filters: { ...state.filters, status }
    })),

  setPriorityFilter: (priority) =>
    set((state) => ({
      ...state,
      filters: { ...state.filters, priority }
    })),

  setFavoriteFilter: (favorite) =>
    set((state) => ({
      ...state,
      filters: { ...state.filters, favorite }
    })),

  resetFilters: () =>
    set((state) => ({
      ...state,
      filters: { status: 'all', priority: 'all', favorite: false }
    })),

  setSearchQuery: (query) =>
    set((state) => ({
      ...state,
      searchQuery: query.toLowerCase()
  })),
}));