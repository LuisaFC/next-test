import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TASK_STATUS, TASK_PRIORITY, TaskStatusType, TaskPriorityType } from '@/types/task';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select';

interface TaskFormFieldsProps {
  title: string;
  description: string;
  status: TaskStatusType;
  priority: TaskPriorityType;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onStatusChange: (value: TaskStatusType) => void;
  onPriorityChange: (value: TaskPriorityType) => void;
}

export function TaskFormFields({
  title,
  description,
  status,
  priority,
  onTitleChange,
  onDescriptionChange,
  onStatusChange,
  onPriorityChange,
}: TaskFormFieldsProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Título</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="description">Descrição</Label>
        <Input
          type="text"
          id="description"
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(TASK_STATUS).map((status) => (
              <SelectItem key={status} value={status}>{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="priority">Prioridade</Label>
        <Select value={priority} onValueChange={onPriorityChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a prioridade" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(TASK_PRIORITY).map((priority) => (
              <SelectItem key={priority} value={priority}>{priority}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}