export type TaskStatus = 'A Fazer' | 'Em Andamento' | 'Concluída' | 'Cancelada';
export type TaskPriority = 'Baixa' | 'Média' | 'Alta' | 'Urgente';

export interface TaskCount {
  _count: {
    [key: string]: number;
  };
}

export interface TaskStatusGroup extends TaskCount {
  status: TaskStatus;
}

export interface TaskPriorityGroup extends TaskCount {
  priority: TaskPriority;
}

// Dados principais
export interface AnalyticsData {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  urgentTasks: number;
  tasksThisMonth: number;
  tasksByDueDate: number;
  tasksByStatus: TaskStatusGroup[];
  tasksByPriority: TaskPriorityGroup[];
}

// Props dos componentes
export interface AnalyticsViewProps {
  data: AnalyticsData;
  onRefresh: () => void;
}

export interface AnalyticsHeaderProps {
  onRefresh: () => void;
}

export interface AnalyticsStatsProps {
  data: AnalyticsData;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  className?: string;
}

export interface AnalyticsChartsProps {
  statusData: TaskStatusGroup[];
  priorityData: TaskPriorityGroup[];
}

export interface AnalyticsChartProps {
  title: string;
  data: TaskStatusGroup[] | TaskPriorityGroup[];
  type: 'bar' | 'pie';
  dataKey: string;
  nameKey: 'status' | 'priority';
  colors: Record<string, string>;
}

// Tipo auxiliar para os gráficos
export type ChartData = {
  status?: string;
  priority?: string;
  _count: {
    status?: number;
    priority?: number;
  };
};