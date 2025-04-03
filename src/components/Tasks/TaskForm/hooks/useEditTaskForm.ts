import { useState } from 'react';
import { Task, TaskStatusType, TaskPriorityType } from '@/types/task';

interface UseTaskEditFormProps {
  task: Task;
  onSubmit: (task: Task) => void;
  onClose: () => void;
}

export function useEditTaskForm({ task, onSubmit, onClose }: UseTaskEditFormProps) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState<TaskStatusType>(task.status);
  const [priority, setPriority] = useState<TaskPriorityType>(task.priority);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: task.id,
      title,
      description,
      status,
      priority,
      favorite: task.favorite
    });

    onClose();
  };

  return {
    title,
    description,
    status,
    priority,
    setTitle,
    setDescription,
    setStatus,
    setPriority,
    handleSubmit
  };
}