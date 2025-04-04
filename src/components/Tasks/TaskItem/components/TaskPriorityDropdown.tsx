import { BadgeDropdown } from '../../BadgeDropdown/BadgeDropdown';
import { TaskPriorityBadge } from './TaskPriorityBadge';


interface TaskPriorityDropdownProps {
  priority: string;
  taskId: number;
  onPriorityChange: (taskId: number, priority: string) => void;
}

export function TaskPriorityDropdown({ priority, taskId, onPriorityChange }: TaskPriorityDropdownProps) {
  const priorityOptions = ['Alta', 'Média', 'Baixa'];

  return (
    <BadgeDropdown
      value={priority}
      options={priorityOptions}
      itemId={taskId}
      onChange={onPriorityChange}
      renderBadge={(value: string) => <TaskPriorityBadge priority={value} />}
    />
  );
}