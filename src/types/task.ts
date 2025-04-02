export interface TaskStatus {
    status: 'A Fazer' | 'Em Andamento' | 'Concluída';
  }

  export interface TaskPriority {
    priority: 'Alta' | 'Média' | 'Baixa';
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