import { AnalyticsChartsProps } from "@/types/analytics";
import { AnalyticsChart } from "./AnalyticsChart";
import { PRIORITY_COLORS, STATUS_COLORS } from "@/constants/analytics";


export function AnalyticsCharts({ statusData, priorityData }: AnalyticsChartsProps) {
  return (
    <section className="space-y-4">
      <StatusChart data={statusData} />
      <PriorityChart data={priorityData} />
    </section>
  );
}

function StatusChart({ data }: { data: AnalyticsChartsProps['statusData'] }) {
  return (
    <AnalyticsChart
      title="Tarefas por Status"
      data={data}
      type="bar"
      dataKey="_count.status"
      nameKey="status"
      colors={STATUS_COLORS}
    />
  );
}

function PriorityChart({ data }: { data: AnalyticsChartsProps['priorityData'] }) {
  return (
    <AnalyticsChart
      title="Tarefas por Prioridade"
      data={data}
      type="pie"
      dataKey="_count.priority"
      nameKey="priority"
      colors={PRIORITY_COLORS}
    />
  );
}