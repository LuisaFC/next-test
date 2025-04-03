import { Task } from '@/types/task';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { TaskFormFields } from './TaskFormFields';
import { useEditTaskForm } from '../hooks/useEditTaskForm';

interface TaskEditFormProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (task: Task) => void;
}

export function TaskEditForm({ task, isOpen, onClose, onUpdate }: TaskEditFormProps) {
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
  } = useEditTaskForm({
    task: task,
    onSubmit: onUpdate,
    onClose,
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Tarefa</DialogTitle>
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
          <Button type="submit">Salvar Alterações</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
