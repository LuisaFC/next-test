'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TaskFormFields } from './components/TaskFormFields';

import { Task } from '@/types/task';
import { useCreateTaskForm } from './hooks/useCreateTaskForm';

interface TaskFormProps {
  onAddTask: (task: Omit<Task, 'id'>) => void;
  children?: React.ReactNode;
}

function TaskForm({ onAddTask, children }: TaskFormProps) {
  const [open, setOpen] = useState(false);
  const {
    title,
    description,
    status,
    priority,
    setTitle,
    setDescription,
    setStatus,
    setPriority,
    handleSubmit,
  } = useCreateTaskForm({
    onSubmit: onAddTask,
    onClose: () => setOpen(false)
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Nova Tarefa</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TaskFormFields
            title={title}
            description={description}
            status={status}
            priority={priority}
            onTitleChange={setTitle}
            onDescriptionChange={setDescription}
            onStatusChange={setStatus}
            onPriorityChange={setPriority}
          />
          <Button type="submit">Adicionar Tarefa</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TaskForm;
