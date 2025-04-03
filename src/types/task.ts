export const TASK_STATUS = {
  TODO: 'A Fazer',
  IN_PROGRESS: 'Em Andamento',
  DONE: 'Concluída',
} as const;

export const TASK_PRIORITY = {
  LOW: 'Baixa',
  MEDIUM: 'Média',
  HIGH: 'Alta',
} as const;

export type TaskStatusType = typeof TASK_STATUS[keyof typeof TASK_STATUS];
export type TaskPriorityType = typeof TASK_PRIORITY[keyof typeof TASK_PRIORITY];

export interface TaskStatus {
  status: TaskStatusType;
}

export interface TaskPriority {
  priority: TaskPriorityType;
}

  export interface Task extends TaskStatus, TaskPriority {
    id: number;
    title: string;
    description: string;
    favorite: boolean;
  }

  export interface TaskItemProps {
    task: Task;
    onUpdate: (updatedTask: Task) => void;
    onDelete: (taskId: number) => void;
  }