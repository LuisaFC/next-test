/* eslint-disable @typescript-eslint/no-explicit-any */
export const STATUS_COLORS = {
  'A Fazer': '#3b82f6',
  'Em Andamento': '#f59e0b',
  'Concluída': '#22c55e',
};

export const PRIORITY_COLORS = {
  'Baixa': '#22c55e',
  'Média': '#f59e0b',
  'Alta': '#ef4444',
};

export const STATS_CONFIG = [
  {
    id: 'total-tasks',
    title: 'Total de Tarefas',
    value: (data: any) => data.totalTasks,
    className: 'text-foreground'
  },
  {
    id: 'completion-rate',
    title: 'Taxa de Conclusão',
    value: (data: any) =>
      `${((data.completedTasks / data.totalTasks) * 100).toFixed(1)}%`,
    className: 'text-green-500',
  },
  {
    id: 'pending-tasks',
    title: 'Tarefas Pendentes',
    value: (data: any) => data.pendingTasks,
    className: 'text-yellow-500'
  },
] as const;