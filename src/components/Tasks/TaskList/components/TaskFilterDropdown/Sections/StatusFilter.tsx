import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";
import { useTaskStore } from "@/store/tasksStore";
import { TASK_STATUS } from "@/types/task";

export function StatusFilter() {
  const { filters, setStatusFilter } = useTaskStore();
  const statusOptions = ['all', ...Object.values(TASK_STATUS)] as const;

  return (
    <>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Status</DropdownMenuLabel>
      {statusOptions.map((status) => (
        <DropdownMenuCheckboxItem
          key={status}
          checked={filters.status === status}
          onCheckedChange={() => setStatusFilter(status)}
        >
          {status === 'all' ? 'Todos' : status}
        </DropdownMenuCheckboxItem>
      ))}
    </>
  );
}