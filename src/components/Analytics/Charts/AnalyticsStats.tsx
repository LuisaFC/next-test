import { STATS_CONFIG } from "@/constants/analytics";
import { StatCard } from "./StatsCard";
import { AnalyticsStatsProps } from "@/types/analytics";

export function AnalyticsStats({ data }: AnalyticsStatsProps) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {STATS_CONFIG.map((stat) => (
        <StatCard
          key={stat.id}
          title={stat.title}
          value={stat.value(data)}
          className={stat.className ?? ''}
        />
      ))}
    </section>
  );
}