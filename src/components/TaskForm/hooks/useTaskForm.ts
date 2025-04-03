import { useState } from 'react';
import { Task, TASK_STATUS, TASK_PRIORITY, TaskStatusType, TaskPriorityType } from '@/types/task';

interface UseTaskFormProps {
  onAddTask: (task: Task) => void;
  onClose: () => void;
}

export function useTaskForm({ onAddTask, onClose }: UseTaskFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TaskStatusType>(TASK_STATUS.TODO);
  const [priority, setPriority] = useState<TaskPriorityType>(TASK_PRIORITY.LOW);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status,
      priority,
      favorite: false,
    };
    onAddTask(newTask);
    resetForm();
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