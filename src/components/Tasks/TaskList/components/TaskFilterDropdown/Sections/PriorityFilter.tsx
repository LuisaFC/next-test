import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { useTaskStore } from "@/store/tasksStore";
import { TASK_PRIORITY } from "@/types/task";

export function PriorityFilter() {
  const { filters, setPriorityFilter } = useTaskStore();
  const priorityOptions = ['all', ...Object.values(TASK_PRIORITY)] as const;

  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Prioridade</DropdownMenuLabel>
      {priorityOptions.map((priority) => (
        <DropdownMenuCheckboxItem
          key={priority}
          checked={filters.priority === priority}
          onCheckedChange={() => setPriorityFilter(priority)}
        >
          {priority === 'all' ? 'Todas' : priority}
        </DropdownMenuCheckboxItem>
      ))}
    </>
  );
}