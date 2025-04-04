import { AnalyticsHeader } from './AnalyticsHeader';
import { AnalyticsStats } from './Charts/AnalyticsStats';
import { AnalyticsCharts } from './Charts/AnalyticsCharts';
import { AnalyticsData } from '@/types/analytics';


interface AnalyticsViewProps {
  data: AnalyticsData;
  onRefresh: () => void;
}

export function AnalyticsView({ data, onRefresh }: AnalyticsViewProps) {
  return (
    <div className="space-y-8">
      <AnalyticsHeader onRefresh={onRefresh} />
      <AnalyticsStats data={data} />
      <AnalyticsCharts
        statusData={data.tasksByStatus}
        priorityData={data.tasksByPriority}
      />
    </div>
  );
}
