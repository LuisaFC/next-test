import { useState, useEffect } from 'react';
import { Task, TASK_STATUS, TASK_PRIORITY, TaskStatusType, TaskPriorityType } from '@/types/task';

interface UseTaskFormProps {
  initialData?: Task;
  onSubmit: (task: Task) => void;
  onClose: () => void;
}

export function useTaskForm({ initialData, onSubmit, onClose }: UseTaskFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? '');
  const [description, setDescription] = useState(initialData?.description ?? '');
  const [status, setStatus] = useState<TaskStatusType>(initialData?.status ?? TASK_STATUS.TODO);
  const [priority, setPriority] = useState<TaskPriorityType>(initialData?.priority ?? TASK_PRIORITY.LOW);

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setStatus(initialData.status);
      setPriority(initialData.priority);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const taskData: Task = {
      id: initialData?.id ?? Date.now(),
      title,
      description,
      status,
      priority,
      favorite: initialData?.favorite ?? false,
    };
    onSubmit(taskData);
    if (!initialData) resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setStatus(TASK_STATUS.TODO);
    setPriority(TASK_PRIORITY.LOW);
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
    handleSubmit,
  };
}