import { Badge } from "@/components/ui/badge";

interface TaskPriorityBadgeProps {
    priority: string;
  }

  export const TaskPriorityBadge = ({ priority }: TaskPriorityBadgeProps) => {
    const priorityColors = {
      'Baixa': 'bg-[var(--chart-2)] text-[var(--chart-2-foreground)] hover:bg-[var(--chart-2-hover)]',
      'Média': 'bg-[var(--chart-5)] text-[var(--chart-5-foreground)] hover:bg-[var(--chart-5-hover)]',
      'Alta': 'bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] hover:bg-[var(--sidebar-primary-hover)]',
    } as const;

    const colorClass = priorityColors[priority as keyof typeof priorityColors] ?? 'bg-gray-100 text-gray-800 hover:bg-gray-200';

    return (
      <Badge className={colorClass}>
        {priority}
      </Badge>
    );
  };