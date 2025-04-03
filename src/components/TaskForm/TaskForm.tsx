'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { TaskFormFields } from './components/TaskFormFields';
import { useTaskForm } from './hooks/useTaskForm';
import { Task } from '@/types/task';

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
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
  } = useTaskForm({
    onAddTask,
    onClose: () => setOpen(false)
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[var(--button-blue)] hover:bg-[var(--button-blue-hover)] text-white">
          Adicionar Nova Tarefa
        </Button>
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