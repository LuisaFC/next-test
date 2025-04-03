interface TaskPriorityBadgeProps {
    priority: string;
  }

  export const TaskPriorityBadge = ({ priority }: TaskPriorityBadgeProps) => {
    const priorityColors = {
      'Alta': 'text-[var(--sidebar-primary)] border-[var(--sidebar-primary)]',
      'Média': 'text-[var(--chart-5)] border-[var(--chart-5)]',
      'Baixa': 'text-[var(--chart-2)] border-[var(--chart-2)]',
    } as const;
    return (
      <div className={`border ${priorityColors[priority as keyof typeof priorityColors] ?? 'text-gray-500 border-gray-500'} font-bold text-xs p-1 rounded`}>
        {priority}
      </div>
    );
  };