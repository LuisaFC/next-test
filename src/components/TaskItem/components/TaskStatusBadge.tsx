interface TaskStatusBadgeProps {
    status: string;
  }

  export const TaskStatusBadge = ({ status }: TaskStatusBadgeProps) => {
    const statusColors = {
      'A Fazer': 'bg-[var(--sidebar-primary)]',
      'Em Andamento': 'bg-[var(--chart-5)]',
      'Concluída': 'bg-[var(--chart-2)]',
    } as const;
    return (
      <div className={`${statusColors[status as keyof typeof statusColors] ?? 'bg-gray-500'} font-bold text-xs text-white p-1 rounded`}>
        {status}
      </div>
    );
  };