import { useState } from 'react';
import { Task, TASK_STATUS, TASK_PRIORITY, TaskStatusType, TaskPriorityType } from '@/types/task';

interface UseCreateTaskFormProps {
  onSubmit: (task: Omit<Task, 'id'>) => void;
  onClose: () => void;
}

export function useCreateTaskForm({ onSubmit, onClose }: UseCreateTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatusType>(TASK_STATUS.TODO);
  const [priority, setPriority] = useState<TaskPriorityType>(TASK_PRIORITY.LOW);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      status,
      priority,
      favorite: false
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