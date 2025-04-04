import { Badge } from '@/components/ui/badge';

interface TaskStatusBadgeProps {
  status: string;
}

export const TaskStatusBadge = ({ status }: TaskStatusBadgeProps) => {
  const statusColors = {
    'A Fazer': 'bg-[var(--chart-2)] text-[var(--chart-2-foreground)] hover:bg-[var(--chart-2-hover)]',
    'Em Andamento': 'bg-[var(--chart-5)] text-[var(--chart-5-foreground)] hover:bg-[var(--chart-5-hover)]',
    'Concluído': 'bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] hover:bg-[var(--sidebar-primary-hover)] hover:text-[var(--chart-5-foreground)]',
  } as const;

  // Usando o operador de coalescência nula para fornecer um valor padrão
  const colorClass = statusColors[status as keyof typeof statusColors] ?? 'bg-gray-100 text-gray-800 hover:bg-gray-200';

  return (
    <Badge className={colorClass}>
      {status}
    </Badge>
  );
};