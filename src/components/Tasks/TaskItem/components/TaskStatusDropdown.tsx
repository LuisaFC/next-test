import { BadgeDropdown } from '../../BadgeDropdown/BadgeDropdown';
import { TaskStatusBadge } from './TaskStatusBadge';

interface TaskStatusDropdownProps {
  status: string;
  taskId: number;
  onStatusChange: (taskId: number, status: string) => void;
}

export function TaskStatusDropdown({ status, taskId, onStatusChange }: TaskStatusDropdownProps) {
  const statusOptions = ['A Fazer', 'Em Andamento', 'Concluída'];

  return (
    <BadgeDropdown
      value={status}
      options={statusOptions}
      itemId={taskId}
      onChange={onStatusChange}
      renderBadge={(value: string) => <TaskStatusBadge status={value} />}
    />
  );
}