'use client';

import { AnalyticsView } from '@/components/Analytics';
import { AnalyticsSkeleton } from '@/components/Analytics/AnalyticsSkeleton';
import { useAnalytics } from '@/hooks/useAnalytics';


export default function AnalyticsPage() {
  const { data, loading, refresh } = useAnalytics();

  if (loading) {
    return <AnalyticsSkeleton />;
  }

  if (!data) {
    return null;
  }

  return (
    <main className="container mx-auto p-4 md:p-8">
      <div className="space-y-4">
       <AnalyticsView data={data} onRefresh={refresh} />
      </div>
    </main>
  )
  ;
}