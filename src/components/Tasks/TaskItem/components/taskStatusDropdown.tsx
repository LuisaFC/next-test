import { useState } from 'react';
import { TaskStatusBadge } from './TaskStatusBadge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface TaskStatusDropdownProps {
  status: string;
  taskId: number;
  onStatusChange: (taskId: number, status: string) => void;
}

export function TaskStatusDropdown({ status, taskId, onStatusChange }: TaskStatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const statusOptions = ['A Fazer', 'Em Andamento', 'Concluído'];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <TaskStatusBadge status={status} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {statusOptions.map((option) => (
          <DropdownMenuItem
            key={option}
            className={option === status ? 'bg-gray-100 font-medium' : ''}
            onClick={() => {
              onStatusChange(taskId, option);
              setIsOpen(false);
            }}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}